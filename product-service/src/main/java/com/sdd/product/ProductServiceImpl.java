package com.sdd.product;

import com.google.protobuf.Value;
import com.sdd.product.model.Product;
import com.sdd.product.repository.ProductRepository;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.stub.StreamObserver;
import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import product.grpc.ProductServiceGrpc;
import product.grpc.StockServiceGrpc;
import product.protobuf.ProductOuterClass;
import product.protobuf.StockOuterClass;

import java.util.Optional;

@GRpcService
public class ProductServiceImpl extends ProductServiceGrpc.ProductServiceImplBase {
    //menghubungkan dengan repository
    @Autowired
    ProductRepository productRepository;

    //akan refer ke stockChannel berdasarkan nama beannnya
    @Qualifier("stockChannel")
    @Autowired
    ManagedChannel stockChannel;

    @Override
    public void getAllProduct(ProductOuterClass.CProduct.Param request, StreamObserver<ProductOuterClass.CProduct.ProductsOrError> responseObserver) {
        try {
            ProductOuterClass.CProduct.Products.Builder productsBuilder =
                    ProductOuterClass.CProduct.Products.newBuilder();

            //mendefinisikan channel
            //9091 => mengikuti port forward pada kubectl
            //kubectl port-forward service/stock-service 9091:9090
            //for address localhost -> untuk running localhost
            //pada saat deploy stock-service dan port 9090 mengikuti dashboard bagian service
//            ManagedChannel channel = ManagedChannelBuilder
//                    .forAddress("localhost", 9091)
//                    .usePlaintext()
//                    .build();

            ManagedChannel channel = ManagedChannelBuilder
                    .forAddress("stock-service", 9090)
                    .usePlaintext()
                    .build();
            long productId1 = 12345;
            //akses servicenya
            StockOuterClass.CStock.TimestampOrError est1 = StockServiceGrpc.newBlockingStub(channel)
                    .getOutOfStockEstimation(ProductOuterClass.CProduct.Product.newBuilder()
                            .setId(productId1)
                            .build());

            //versi
//            StockOuterClass.CStock.TimestampOrError stock1 = StockServiceGrpc.newBlockingStub(channel)
//                    .getOutOfStockEstimation(ProductOuterClass.CProduct.Product.newBuilder()
//                            .setId(productId1)
//                            .build());

            // Put each product
            productsBuilder.addRecord(ProductOuterClass.CProduct.Product.newBuilder()
                    .setId(productId1)
                    .setName("Laptop ASUS TPxxxx")
                    .setOutOfStockInfo(est1)
                    .build());

            long productId2 = 54321;
            StockOuterClass.CStock.TimestampOrError stock2 = StockServiceGrpc.newBlockingStub(channel)
                    .getOutOfStockEstimation(ProductOuterClass.CProduct.Product.newBuilder()
                            .setId(productId2)
                            .build());

            productsBuilder.addRecord(ProductOuterClass.CProduct.Product.newBuilder()
                    .setId(productId2)
                    .setName("Laptop MacBook Pro")
                    .setOutOfStockInfo(stock2)
                    .build());

            responseObserver.onNext(ProductOuterClass.CProduct.ProductsOrError.newBuilder()
                    .setBatch(productsBuilder.build())
                    .build());
        } catch (Exception ex) {
            responseObserver.onNext(ProductOuterClass.CProduct.ProductsOrError.newBuilder()
                    .setError(Value.newBuilder().setStringValue(ex.getMessage()).build())
                    .build());
        }

        responseObserver.onCompleted();
    }

    @Override
    public void saveProduct(ProductOuterClass.CProduct.Product request, StreamObserver<ProductOuterClass.CProduct.ProductOrError> responseObserver) {
        try {
            //kontrol atau handle
            if (request.getId() == 0) throw new Exception("Id tidak boleh bernilai 0");
            if (request.getName().isEmpty()) throw new Exception("Nama tidak boleh kosong");

            Product product = new Product();
            product.setId(request.getId());
            product.setName(request.getName());

            Product savedProduct = productRepository.save(product);

            responseObserver.onNext(
                    ProductOuterClass.CProduct.ProductOrError.newBuilder()
                            .setProduct(
                                    ProductOuterClass.CProduct.Product.newBuilder()
                                            .setId(savedProduct.getId())
                                            .setName(savedProduct.getName())
                                            .build())
                            .build()
            );
        } catch (Exception ex) {
            responseObserver.onNext(ProductOuterClass.CProduct.ProductOrError.newBuilder()
                    .setError(Value.newBuilder()
                            .setStringValue(ex.getMessage())
                            .build())
                    .build());
        }
        // mematikan stream
        responseObserver.onCompleted();
    }

    @Override
    public void getProductInfo(ProductOuterClass.CProduct.Product request, StreamObserver<ProductOuterClass.CProduct.ProductOrError> responseObserver) {
        try {
            if (request.getId() == 0) throw new Exception("Id tidak boleh berinal 0");
            Optional<Product> product = productRepository.findById(request.getId());
            //jika tidak ada di database
            if (!product.isPresent()) throw  new Exception("Product dengan id" + request.getId() + "tidak ditemukan");

            //mengambil data stock
            StockOuterClass.CStock.StockOrError stock = StockServiceGrpc.newBlockingStub(stockChannel).getStockOf(ProductOuterClass.CProduct.Product.newBuilder()
                    .setId(request.getId())
                    .build());

            responseObserver.onNext(ProductOuterClass.CProduct.ProductOrError.newBuilder()
                    .setProduct(
                            ProductOuterClass.CProduct.Product.newBuilder()
                                    .setId(product.get().getId())
                                    .setName(product.get().getName())
                                    .setStock(stock.getStock())
                                    .build()
                    )
                    .build());
        } catch (Exception ex) {
            responseObserver.onNext(ProductOuterClass.CProduct.ProductOrError.newBuilder()
                    .setError(Value.newBuilder()
                            .setStringValue(ex.getMessage())
                            .build())
                    .build());
        }

        responseObserver.onCompleted();
    }
}
