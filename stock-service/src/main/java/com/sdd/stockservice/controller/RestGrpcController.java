package com.sdd.stockservice.controller;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Message;
import com.google.protobuf.Timestamp;
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

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value = "/{clazz}/{method}", consumes = "application/grpc-web-text-json", produces = "application/grpc-web-text-json")
    Object postJson(@RequestBody byte[] data, @RequestHeader Map<String, String> headers,
                    @PathVariable("clazz") String clazz, @PathVariable("method") String method) {
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("access-control-expose-headers", "custom-header-1,grpc-status,grpc-message");
        responseHeaders.set("content-type", "application/grpc-web-text-json");
        responseHeaders.set("grpc-accept-encoding", "gzip");
        responseHeaders.set("grpc-encoding", "identity");

        DeferredResult<byte[]> deffered = new DeferredResult<byte[]>(new Long(1 * 24 * 60 * 60 * 1000));
        List<Message> messages = new ArrayList<>();

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

                    String strData = new String(data);
                    JsonFormat.parser().merge(strData, reqMsgBld);

                    Object param = reqMsgBld.build();
                    List<Method> methodsToCall = Arrays.asList(cl.getClass().getDeclaredMethods()).stream()
                            .filter(m -> m.getName().equals(javaMethod))
                            .collect(Collectors.toList());
                    if (methodsToCall.size() > 0) {
                        methodsToCall.get(0).invoke(cl, param, new StreamObserver<Message>() {
                            @Override
                            public void onNext(Message o) {
                                messages.add(o);
                            }

                            @Override
                            public void onCompleted() {
                                List<String> lMessages = messages.stream().map(m -> {
                                    try {
                                        return JsonFormat.printer().print(m);
                                    } catch (InvalidProtocolBufferException e) {
                                        return "{}";
                                    }
                                }).collect(Collectors.toList());

                                deffered.setResult(("[" + String.join(",", lMessages) + "]").getBytes());
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

        return new ResponseEntity(deffered.getResult(), responseHeaders, HttpStatus.OK);
    }

    @ResponseBody
    @ExceptionHandler(HttpMediaTypeNotAcceptableException.class)
    public String handleHttpMediaTypeNotAcceptableException() {
        return "acceptable MIME type:" + MediaType.ALL_VALUE;
    }
}
