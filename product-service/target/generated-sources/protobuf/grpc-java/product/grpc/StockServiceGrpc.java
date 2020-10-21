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
    comments = "Source: product/grpc/stock_service.proto")
public final class StockServiceGrpc {

  private StockServiceGrpc() {}

  public static final String SERVICE_NAME = "product.grpc.StockService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.StockOuterClass.CStock.TimestampOrError> getGetOutOfStockEstimationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetOutOfStockEstimation",
      requestType = product.protobuf.ProductOuterClass.CProduct.Product.class,
      responseType = product.protobuf.StockOuterClass.CStock.TimestampOrError.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.StockOuterClass.CStock.TimestampOrError> getGetOutOfStockEstimationMethod() {
    io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.StockOuterClass.CStock.TimestampOrError> getGetOutOfStockEstimationMethod;
    if ((getGetOutOfStockEstimationMethod = StockServiceGrpc.getGetOutOfStockEstimationMethod) == null) {
      synchronized (StockServiceGrpc.class) {
        if ((getGetOutOfStockEstimationMethod = StockServiceGrpc.getGetOutOfStockEstimationMethod) == null) {
          StockServiceGrpc.getGetOutOfStockEstimationMethod = getGetOutOfStockEstimationMethod = 
              io.grpc.MethodDescriptor.<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.StockOuterClass.CStock.TimestampOrError>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.StockService", "GetOutOfStockEstimation"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.Product.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.StockOuterClass.CStock.TimestampOrError.getDefaultInstance()))
                  .setSchemaDescriptor(new StockServiceMethodDescriptorSupplier("GetOutOfStockEstimation"))
                  .build();
          }
        }
     }
     return getGetOutOfStockEstimationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<product.protobuf.StockOuterClass.CStock.Stock,
      product.protobuf.StockOuterClass.CStock.StockOrError> getSaveStockMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SaveStock",
      requestType = product.protobuf.StockOuterClass.CStock.Stock.class,
      responseType = product.protobuf.StockOuterClass.CStock.StockOrError.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<product.protobuf.StockOuterClass.CStock.Stock,
      product.protobuf.StockOuterClass.CStock.StockOrError> getSaveStockMethod() {
    io.grpc.MethodDescriptor<product.protobuf.StockOuterClass.CStock.Stock, product.protobuf.StockOuterClass.CStock.StockOrError> getSaveStockMethod;
    if ((getSaveStockMethod = StockServiceGrpc.getSaveStockMethod) == null) {
      synchronized (StockServiceGrpc.class) {
        if ((getSaveStockMethod = StockServiceGrpc.getSaveStockMethod) == null) {
          StockServiceGrpc.getSaveStockMethod = getSaveStockMethod = 
              io.grpc.MethodDescriptor.<product.protobuf.StockOuterClass.CStock.Stock, product.protobuf.StockOuterClass.CStock.StockOrError>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.StockService", "SaveStock"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.StockOuterClass.CStock.Stock.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.StockOuterClass.CStock.StockOrError.getDefaultInstance()))
                  .setSchemaDescriptor(new StockServiceMethodDescriptorSupplier("SaveStock"))
                  .build();
          }
        }
     }
     return getSaveStockMethod;
  }

  private static volatile io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.StockOuterClass.CStock.StockOrError> getGetStockOfMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetStockOf",
      requestType = product.protobuf.ProductOuterClass.CProduct.Product.class,
      responseType = product.protobuf.StockOuterClass.CStock.StockOrError.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.StockOuterClass.CStock.StockOrError> getGetStockOfMethod() {
    io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.StockOuterClass.CStock.StockOrError> getGetStockOfMethod;
    if ((getGetStockOfMethod = StockServiceGrpc.getGetStockOfMethod) == null) {
      synchronized (StockServiceGrpc.class) {
        if ((getGetStockOfMethod = StockServiceGrpc.getGetStockOfMethod) == null) {
          StockServiceGrpc.getGetStockOfMethod = getGetStockOfMethod = 
              io.grpc.MethodDescriptor.<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.StockOuterClass.CStock.StockOrError>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.StockService", "GetStockOf"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.Product.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.StockOuterClass.CStock.StockOrError.getDefaultInstance()))
                  .setSchemaDescriptor(new StockServiceMethodDescriptorSupplier("GetStockOf"))
                  .build();
          }
        }
     }
     return getGetStockOfMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static StockServiceStub newStub(io.grpc.Channel channel) {
    return new StockServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static StockServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new StockServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static StockServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new StockServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class StockServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void getOutOfStockEstimation(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.TimestampOrError> responseObserver) {
      asyncUnimplementedUnaryCall(getGetOutOfStockEstimationMethod(), responseObserver);
    }

    /**
     */
    public void saveStock(product.protobuf.StockOuterClass.CStock.Stock request,
        io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.StockOrError> responseObserver) {
      asyncUnimplementedUnaryCall(getSaveStockMethod(), responseObserver);
    }

    /**
     */
    public void getStockOf(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.StockOrError> responseObserver) {
      asyncUnimplementedUnaryCall(getGetStockOfMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetOutOfStockEstimationMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                product.protobuf.ProductOuterClass.CProduct.Product,
                product.protobuf.StockOuterClass.CStock.TimestampOrError>(
                  this, METHODID_GET_OUT_OF_STOCK_ESTIMATION)))
          .addMethod(
            getSaveStockMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                product.protobuf.StockOuterClass.CStock.Stock,
                product.protobuf.StockOuterClass.CStock.StockOrError>(
                  this, METHODID_SAVE_STOCK)))
          .addMethod(
            getGetStockOfMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                product.protobuf.ProductOuterClass.CProduct.Product,
                product.protobuf.StockOuterClass.CStock.StockOrError>(
                  this, METHODID_GET_STOCK_OF)))
          .build();
    }
  }

  /**
   */
  public static final class StockServiceStub extends io.grpc.stub.AbstractStub<StockServiceStub> {
    private StockServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StockServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StockServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StockServiceStub(channel, callOptions);
    }

    /**
     */
    public void getOutOfStockEstimation(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.TimestampOrError> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetOutOfStockEstimationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void saveStock(product.protobuf.StockOuterClass.CStock.Stock request,
        io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.StockOrError> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSaveStockMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getStockOf(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.StockOrError> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetStockOfMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class StockServiceBlockingStub extends io.grpc.stub.AbstractStub<StockServiceBlockingStub> {
    private StockServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StockServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StockServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StockServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public product.protobuf.StockOuterClass.CStock.TimestampOrError getOutOfStockEstimation(product.protobuf.ProductOuterClass.CProduct.Product request) {
      return blockingUnaryCall(
          getChannel(), getGetOutOfStockEstimationMethod(), getCallOptions(), request);
    }

    /**
     */
    public product.protobuf.StockOuterClass.CStock.StockOrError saveStock(product.protobuf.StockOuterClass.CStock.Stock request) {
      return blockingUnaryCall(
          getChannel(), getSaveStockMethod(), getCallOptions(), request);
    }

    /**
     */
    public product.protobuf.StockOuterClass.CStock.StockOrError getStockOf(product.protobuf.ProductOuterClass.CProduct.Product request) {
      return blockingUnaryCall(
          getChannel(), getGetStockOfMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class StockServiceFutureStub extends io.grpc.stub.AbstractStub<StockServiceFutureStub> {
    private StockServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StockServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StockServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StockServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<product.protobuf.StockOuterClass.CStock.TimestampOrError> getOutOfStockEstimation(
        product.protobuf.ProductOuterClass.CProduct.Product request) {
      return futureUnaryCall(
          getChannel().newCall(getGetOutOfStockEstimationMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<product.protobuf.StockOuterClass.CStock.StockOrError> saveStock(
        product.protobuf.StockOuterClass.CStock.Stock request) {
      return futureUnaryCall(
          getChannel().newCall(getSaveStockMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<product.protobuf.StockOuterClass.CStock.StockOrError> getStockOf(
        product.protobuf.ProductOuterClass.CProduct.Product request) {
      return futureUnaryCall(
          getChannel().newCall(getGetStockOfMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_OUT_OF_STOCK_ESTIMATION = 0;
  private static final int METHODID_SAVE_STOCK = 1;
  private static final int METHODID_GET_STOCK_OF = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final StockServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(StockServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_OUT_OF_STOCK_ESTIMATION:
          serviceImpl.getOutOfStockEstimation((product.protobuf.ProductOuterClass.CProduct.Product) request,
              (io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.TimestampOrError>) responseObserver);
          break;
        case METHODID_SAVE_STOCK:
          serviceImpl.saveStock((product.protobuf.StockOuterClass.CStock.Stock) request,
              (io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.StockOrError>) responseObserver);
          break;
        case METHODID_GET_STOCK_OF:
          serviceImpl.getStockOf((product.protobuf.ProductOuterClass.CProduct.Product) request,
              (io.grpc.stub.StreamObserver<product.protobuf.StockOuterClass.CStock.StockOrError>) responseObserver);
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

  private static abstract class StockServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    StockServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return product.grpc.StockServiceOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("StockService");
    }
  }

  private static final class StockServiceFileDescriptorSupplier
      extends StockServiceBaseDescriptorSupplier {
    StockServiceFileDescriptorSupplier() {}
  }

  private static final class StockServiceMethodDescriptorSupplier
      extends StockServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    StockServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (StockServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new StockServiceFileDescriptorSupplier())
              .addMethod(getGetOutOfStockEstimationMethod())
              .addMethod(getSaveStockMethod())
              .addMethod(getGetStockOfMethod())
              .build();
        }
      }
    }
    return result;
  }
}
