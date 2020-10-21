package product.grpc;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.16.1)",
    comments = "Source: lb/grpc/lb_service.proto")
public final class LbServiceGrpc {

  private LbServiceGrpc() {}

  public static final String SERVICE_NAME = "product.grpc.LbService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Value> getResponseFromServerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ResponseFromServer",
      requestType = com.google.protobuf.Empty.class,
      responseType = com.google.protobuf.Value.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<com.google.protobuf.Empty,
      com.google.protobuf.Value> getResponseFromServerMethod() {
    io.grpc.MethodDescriptor<com.google.protobuf.Empty, com.google.protobuf.Value> getResponseFromServerMethod;
    if ((getResponseFromServerMethod = LbServiceGrpc.getResponseFromServerMethod) == null) {
      synchronized (LbServiceGrpc.class) {
        if ((getResponseFromServerMethod = LbServiceGrpc.getResponseFromServerMethod) == null) {
          LbServiceGrpc.getResponseFromServerMethod = getResponseFromServerMethod = 
              io.grpc.MethodDescriptor.<com.google.protobuf.Empty, com.google.protobuf.Value>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.LbService", "ResponseFromServer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Value.getDefaultInstance()))
                  .setSchemaDescriptor(new LbServiceMethodDescriptorSupplier("ResponseFromServer"))
                  .build();
          }
        }
     }
     return getResponseFromServerMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static LbServiceStub newStub(io.grpc.Channel channel) {
    return new LbServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static LbServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new LbServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static LbServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new LbServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class LbServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void responseFromServer(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Value> responseObserver) {
      asyncUnimplementedUnaryCall(getResponseFromServerMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getResponseFromServerMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                com.google.protobuf.Empty,
                com.google.protobuf.Value>(
                  this, METHODID_RESPONSE_FROM_SERVER)))
          .build();
    }
  }

  /**
   */
  public static final class LbServiceStub extends io.grpc.stub.AbstractStub<LbServiceStub> {
    private LbServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private LbServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LbServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new LbServiceStub(channel, callOptions);
    }

    /**
     */
    public void responseFromServer(com.google.protobuf.Empty request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Value> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getResponseFromServerMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class LbServiceBlockingStub extends io.grpc.stub.AbstractStub<LbServiceBlockingStub> {
    private LbServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private LbServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LbServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new LbServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<com.google.protobuf.Value> responseFromServer(
        com.google.protobuf.Empty request) {
      return blockingServerStreamingCall(
          getChannel(), getResponseFromServerMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class LbServiceFutureStub extends io.grpc.stub.AbstractStub<LbServiceFutureStub> {
    private LbServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private LbServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected LbServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new LbServiceFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_RESPONSE_FROM_SERVER = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final LbServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(LbServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_RESPONSE_FROM_SERVER:
          serviceImpl.responseFromServer((com.google.protobuf.Empty) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Value>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class LbServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    LbServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return product.grpc.LbServiceOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("LbService");
    }
  }

  private static final class LbServiceFileDescriptorSupplier
      extends LbServiceBaseDescriptorSupplier {
    LbServiceFileDescriptorSupplier() {}
  }

  private static final class LbServiceMethodDescriptorSupplier
      extends LbServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    LbServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (LbServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new LbServiceFileDescriptorSupplier())
              .addMethod(getResponseFromServerMethod())
              .build();
        }
      }
    }
    return result;
  }
}
