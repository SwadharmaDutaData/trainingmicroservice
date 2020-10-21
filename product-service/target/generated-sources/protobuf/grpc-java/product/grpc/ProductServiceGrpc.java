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
    comments = "Source: product/grpc/product_service.proto")
public final class ProductServiceGrpc {

  private ProductServiceGrpc() {}

  public static final String SERVICE_NAME = "product.grpc.ProductService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Param,
      product.protobuf.ProductOuterClass.CProduct.ProductsOrError> getGetAllProductMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetAllProduct",
      requestType = product.protobuf.ProductOuterClass.CProduct.Param.class,
      responseType = product.protobuf.ProductOuterClass.CProduct.ProductsOrError.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Param,
      product.protobuf.ProductOuterClass.CProduct.ProductsOrError> getGetAllProductMethod() {
    io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Param, product.protobuf.ProductOuterClass.CProduct.ProductsOrError> getGetAllProductMethod;
    if ((getGetAllProductMethod = ProductServiceGrpc.getGetAllProductMethod) == null) {
      synchronized (ProductServiceGrpc.class) {
        if ((getGetAllProductMethod = ProductServiceGrpc.getGetAllProductMethod) == null) {
          ProductServiceGrpc.getGetAllProductMethod = getGetAllProductMethod = 
              io.grpc.MethodDescriptor.<product.protobuf.ProductOuterClass.CProduct.Param, product.protobuf.ProductOuterClass.CProduct.ProductsOrError>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.ProductService", "GetAllProduct"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.Param.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.ProductsOrError.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductServiceMethodDescriptorSupplier("GetAllProduct"))
                  .build();
          }
        }
     }
     return getGetAllProductMethod;
  }

  private static volatile io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.ProductOuterClass.CProduct.ProductOrError> getSaveProductMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SaveProduct",
      requestType = product.protobuf.ProductOuterClass.CProduct.Product.class,
      responseType = product.protobuf.ProductOuterClass.CProduct.ProductOrError.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.ProductOuterClass.CProduct.ProductOrError> getSaveProductMethod() {
    io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.ProductOuterClass.CProduct.ProductOrError> getSaveProductMethod;
    if ((getSaveProductMethod = ProductServiceGrpc.getSaveProductMethod) == null) {
      synchronized (ProductServiceGrpc.class) {
        if ((getSaveProductMethod = ProductServiceGrpc.getSaveProductMethod) == null) {
          ProductServiceGrpc.getSaveProductMethod = getSaveProductMethod = 
              io.grpc.MethodDescriptor.<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.ProductOuterClass.CProduct.ProductOrError>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.ProductService", "SaveProduct"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.Product.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.ProductOrError.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductServiceMethodDescriptorSupplier("SaveProduct"))
                  .build();
          }
        }
     }
     return getSaveProductMethod;
  }

  private static volatile io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.ProductOuterClass.CProduct.ProductOrError> getGetProductInfoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProductInfo",
      requestType = product.protobuf.ProductOuterClass.CProduct.Product.class,
      responseType = product.protobuf.ProductOuterClass.CProduct.ProductOrError.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product,
      product.protobuf.ProductOuterClass.CProduct.ProductOrError> getGetProductInfoMethod() {
    io.grpc.MethodDescriptor<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.ProductOuterClass.CProduct.ProductOrError> getGetProductInfoMethod;
    if ((getGetProductInfoMethod = ProductServiceGrpc.getGetProductInfoMethod) == null) {
      synchronized (ProductServiceGrpc.class) {
        if ((getGetProductInfoMethod = ProductServiceGrpc.getGetProductInfoMethod) == null) {
          ProductServiceGrpc.getGetProductInfoMethod = getGetProductInfoMethod = 
              io.grpc.MethodDescriptor.<product.protobuf.ProductOuterClass.CProduct.Product, product.protobuf.ProductOuterClass.CProduct.ProductOrError>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "product.grpc.ProductService", "GetProductInfo"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.Product.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  product.protobuf.ProductOuterClass.CProduct.ProductOrError.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductServiceMethodDescriptorSupplier("GetProductInfo"))
                  .build();
          }
        }
     }
     return getGetProductInfoMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ProductServiceStub newStub(io.grpc.Channel channel) {
    return new ProductServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ProductServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new ProductServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ProductServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new ProductServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class ProductServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void getAllProduct(product.protobuf.ProductOuterClass.CProduct.Param request,
        io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductsOrError> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllProductMethod(), responseObserver);
    }

    /**
     */
    public void saveProduct(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductOrError> responseObserver) {
      asyncUnimplementedUnaryCall(getSaveProductMethod(), responseObserver);
    }

    /**
     */
    public void getProductInfo(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductOrError> responseObserver) {
      asyncUnimplementedUnaryCall(getGetProductInfoMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetAllProductMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                product.protobuf.ProductOuterClass.CProduct.Param,
                product.protobuf.ProductOuterClass.CProduct.ProductsOrError>(
                  this, METHODID_GET_ALL_PRODUCT)))
          .addMethod(
            getSaveProductMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                product.protobuf.ProductOuterClass.CProduct.Product,
                product.protobuf.ProductOuterClass.CProduct.ProductOrError>(
                  this, METHODID_SAVE_PRODUCT)))
          .addMethod(
            getGetProductInfoMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                product.protobuf.ProductOuterClass.CProduct.Product,
                product.protobuf.ProductOuterClass.CProduct.ProductOrError>(
                  this, METHODID_GET_PRODUCT_INFO)))
          .build();
    }
  }

  /**
   */
  public static final class ProductServiceStub extends io.grpc.stub.AbstractStub<ProductServiceStub> {
    private ProductServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductServiceStub(channel, callOptions);
    }

    /**
     */
    public void getAllProduct(product.protobuf.ProductOuterClass.CProduct.Param request,
        io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductsOrError> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllProductMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void saveProduct(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductOrError> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSaveProductMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getProductInfo(product.protobuf.ProductOuterClass.CProduct.Product request,
        io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductOrError> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetProductInfoMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ProductServiceBlockingStub extends io.grpc.stub.AbstractStub<ProductServiceBlockingStub> {
    private ProductServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<product.protobuf.ProductOuterClass.CProduct.ProductsOrError> getAllProduct(
        product.protobuf.ProductOuterClass.CProduct.Param request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllProductMethod(), getCallOptions(), request);
    }

    /**
     */
    public product.protobuf.ProductOuterClass.CProduct.ProductOrError saveProduct(product.protobuf.ProductOuterClass.CProduct.Product request) {
      return blockingUnaryCall(
          getChannel(), getSaveProductMethod(), getCallOptions(), request);
    }

    /**
     */
    public product.protobuf.ProductOuterClass.CProduct.ProductOrError getProductInfo(product.protobuf.ProductOuterClass.CProduct.Product request) {
      return blockingUnaryCall(
          getChannel(), getGetProductInfoMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ProductServiceFutureStub extends io.grpc.stub.AbstractStub<ProductServiceFutureStub> {
    private ProductServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<product.protobuf.ProductOuterClass.CProduct.ProductOrError> saveProduct(
        product.protobuf.ProductOuterClass.CProduct.Product request) {
      return futureUnaryCall(
          getChannel().newCall(getSaveProductMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<product.protobuf.ProductOuterClass.CProduct.ProductOrError> getProductInfo(
        product.protobuf.ProductOuterClass.CProduct.Product request) {
      return futureUnaryCall(
          getChannel().newCall(getGetProductInfoMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_ALL_PRODUCT = 0;
  private static final int METHODID_SAVE_PRODUCT = 1;
  private static final int METHODID_GET_PRODUCT_INFO = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ProductServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ProductServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_ALL_PRODUCT:
          serviceImpl.getAllProduct((product.protobuf.ProductOuterClass.CProduct.Param) request,
              (io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductsOrError>) responseObserver);
          break;
        case METHODID_SAVE_PRODUCT:
          serviceImpl.saveProduct((product.protobuf.ProductOuterClass.CProduct.Product) request,
              (io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductOrError>) responseObserver);
          break;
        case METHODID_GET_PRODUCT_INFO:
          serviceImpl.getProductInfo((product.protobuf.ProductOuterClass.CProduct.Product) request,
              (io.grpc.stub.StreamObserver<product.protobuf.ProductOuterClass.CProduct.ProductOrError>) responseObserver);
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

  private static abstract class ProductServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ProductServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return product.grpc.ProductServiceOuterClass.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ProductService");
    }
  }

  private static final class ProductServiceFileDescriptorSupplier
      extends ProductServiceBaseDescriptorSupplier {
    ProductServiceFileDescriptorSupplier() {}
  }

  private static final class ProductServiceMethodDescriptorSupplier
      extends ProductServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ProductServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (ProductServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ProductServiceFileDescriptorSupplier())
              .addMethod(getGetAllProductMethod())
              .addMethod(getSaveProductMethod())
              .addMethod(getGetProductInfoMethod())
              .build();
        }
      }
    }
    return result;
  }
}
