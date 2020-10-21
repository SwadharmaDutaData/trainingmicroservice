package com.sdd.product;

import com.google.protobuf.Any;
import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import io.grpc.MethodDescriptor;
import io.grpc.ServerMethodDefinition;
import io.grpc.ServerServiceDefinition;
import io.grpc.stub.StreamObserver;
import org.lognet.springboot.grpc.GRpcService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class RestGrpcController {
    static Logger logger = LoggerFactory.getLogger(RestGrpcController.class);

    @Autowired
    ApplicationContext applicationContext;

    private byte[] processMessage(String clazz, String method, byte[] data, String format) {
        DeferredResult<byte[]> deffered = new DeferredResult<>(new Long(1 * 24 * 60 * 60 * 1000));

        String javaMethod = method.length() > 0 ? method.substring(0, 1).toLowerCase() + (method.length() > 1 ? method.substring(1) : "") : "";
        Map<String, Object> grpcServices = applicationContext.getBeansWithAnnotation(GRpcService.class);
        grpcServices.values().forEach(cl -> {
            try {
                Method bindService = cl.getClass().getMethod("bindService");
                ServerServiceDefinition ssd = (ServerServiceDefinition) bindService.invoke(cl);
                ServerMethodDefinition<?, ?> mt = ssd.getMethod(clazz + "/" + method);
                if (mt != null) {
                    MethodDescriptor<Message, Message> md = (MethodDescriptor<Message, Message>) mt.getMethodDescriptor();
                    Message.Builder reqMsgBld = ((Message) ((MethodDescriptor.PrototypeMarshaller) md.getRequestMarshaller()).getMessagePrototype()).toBuilder();

                    if (format.equalsIgnoreCase("json")) {
                        String strData = new String(data);
                        JsonFormat.parser().merge(strData, reqMsgBld);
                    } else if (format.equalsIgnoreCase("binary")) {
                        if (data != null) reqMsgBld = reqMsgBld.mergeFrom(data);
                    }

                    Object param = reqMsgBld.build();
                    List<Method> methodsToCall = Arrays.asList(cl.getClass().getDeclaredMethods()).stream()
                            .filter(m -> m.getName().equals(javaMethod))
                            .collect(Collectors.toList());
                    if (methodsToCall.size() > 0) {
                        List<Message> messages = new ArrayList<>();
                        final Message.Builder[] respMsgBld = {((Message) ((MethodDescriptor.PrototypeMarshaller) md.getResponseMarshaller()).getMessagePrototype()).toBuilder()};

                        methodsToCall.get(0).invoke(cl, param, new StreamObserver<Message>() {
                            @Override
                            public void onNext(Message o) {
                                if (format.equalsIgnoreCase("json")) {
                                    messages.add(o);
                                } else if (format.equalsIgnoreCase("binary")) {
                                    respMsgBld[0] = respMsgBld[0].mergeFrom(o);
                                }
                            }

                            @Override
                            public void onCompleted() {
                                if (format.equalsIgnoreCase("json")) {
                                    List<String> lMessages = messages.stream().map(m -> {
                                        try {
                                            return JsonFormat.printer().print(m);
                                        } catch (InvalidProtocolBufferException e) {
                                            return "{}";
                                        }
                                    }).collect(Collectors.toList());

                                    deffered.setResult(("[" + String.join(",", lMessages) + "]").getBytes());
                                } else if (format.equalsIgnoreCase("binary")) {
                                    deffered.setResult(respMsgBld[0].build().toByteArray());
                                }
                            }

                            @Override
                            public void onError(Throwable throwable) {
                                deffered.setErrorResult(throwable);
                            }
                        });
                    }
                }
            } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException | InvalidProtocolBufferException e) {
                logger.error(e.getMessage(), e.getCause());
            }
        });

        return (byte[]) deffered.getResult();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value = "/{clazz}/{method}", consumes = "application/grpc-web-text", produces = "application/grpc-web-text")
    Object postBinary(@RequestBody(required=false) byte[] data, @RequestHeader Map<String, String> headers,
                      @PathVariable("clazz") String clazz, @PathVariable("method") String method) {
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("access-control-expose-headers", "custom-header-1,grpc-status,grpc-message");
        responseHeaders.set("content-type", "application/grpc-web-text");
        responseHeaders.set("grpc-accept-encoding", "gzip");
        responseHeaders.set("grpc-encoding", "identity");

        return new ResponseEntity(processMessage(clazz, method, data, "binary"), responseHeaders, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value = "/{clazz}/{method}", consumes = "application/grpc-web-text-json", produces = "application/grpc-web-text-json")
    Object postJson(@RequestBody byte[] data, @RequestHeader Map<String, String> headers,
                    @PathVariable("clazz") String clazz, @PathVariable("method") String method) {
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("access-control-expose-headers", "custom-header-1,grpc-status,grpc-message");
        responseHeaders.set("content-type", "application/grpc-web-text-json");
        responseHeaders.set("grpc-accept-encoding", "gzip");
        responseHeaders.set("grpc-encoding", "identity");

        return new ResponseEntity(processMessage(clazz, method, data, "json"), responseHeaders, HttpStatus.OK);
    }

    @ResponseBody
    @ExceptionHandler(HttpMediaTypeNotAcceptableException.class)
    public String handleHttpMediaTypeNotAcceptableException() {
        return "acceptable MIME type:" + MediaType.ALL_VALUE;
    }
}