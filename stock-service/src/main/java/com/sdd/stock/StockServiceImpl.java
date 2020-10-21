package com.sdd.stock;

import com.google.protobuf.Timestamp;
import com.google.protobuf.Value;
import com.sdd.stock.model.Stock;
import com.sdd.stock.repository.StockRepository;
import io.grpc.stub.StreamObserver;
import org.joda.time.DateTime;
import org.lognet.springboot.grpc.GRpcService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import product.grpc.StockServiceGrpc;
import product.protobuf.ProductOuterClass;
import product.protobuf.StockOuterClass;

import java.net.InetAddress;
import java.util.Optional;

@GRpcService
public class StockServiceImpl extends
        StockServiceGrpc.StockServiceImplBase {

    @Autowired
    StockRepository repository;

    @Override
    public void getOutOfStockEstimation(
            ProductOuterClass.CProduct.Product request,
            StreamObserver<StockOuterClass.CStock.TimestampOrError> responseObserver) {
        try {


            if (request.getId() == 0)
                throw new Exception("Stock id harus lebih besar dari 0");

            DateTime oosTime = new DateTime(2022, 1, 5,
                    6, 45, 9);

            responseObserver.onNext(StockOuterClass.CStock.TimestampOrError
                    .newBuilder()
                    .setOutOfStockTime(Timestamp.newBuilder()
                            .setSeconds(oosTime.getMillis() / 1000)
//                            .setNanos(Long.valueOf(oosTime.getMillis() - (oosTime.getMillis() / 1000)).intValue())
                            .build())
                    .build());


        } catch (Exception ex) {
            responseObserver.onNext(StockOuterClass.CStock.TimestampOrError
                    .newBuilder()
                    .setError(Value.newBuilder()
                            .setStringValue(ex.getMessage())
                            .build())
                    .build());
        }

        responseObserver.onCompleted();
    }

    @Override
    public void saveStock(StockOuterClass.CStock.Stock request, StreamObserver<StockOuterClass.CStock.StockOrError> responseObserver) {
        try {
            DateTime lastIn = new DateTime(request.getLastIncoming().getSeconds() * 1000);
            DateTime lastOut = new DateTime(request.getLastIncoming().getSeconds() * 1000);

            Stock stock = new Stock();
            stock.setProductID(request.getProductId());
            stock.setNumber(request.getNumber());
            stock.setLastIncoming(lastIn.toString());
            stock.setLastOutgoing(lastOut.toString());

            Stock savedStock = repository.save(stock);

            //response hasil
            responseObserver.onNext(StockOuterClass.CStock.StockOrError.newBuilder()
                    .setStock(StockOuterClass.CStock.Stock.newBuilder()
                            .setProductId(savedStock.getProductID())
                            .setNumber(savedStock.getNumber())
                            .setLastIncoming(Timestamp.newBuilder()
                                    .setSeconds(new DateTime(savedStock.getLastIncoming()).getMillis() / 1000)
                                    .build())
                            .setLastOutgoing(Timestamp.newBuilder()
                                    .setSeconds(new DateTime(savedStock.getLastOutgoing()).getMillis() / 1000)
                                    .build())
                            .build())
                    .build());
        } catch (Exception ex) {
            responseObserver.onNext(StockOuterClass.CStock.StockOrError.newBuilder()
                    .setError(Value.newBuilder().setStringValue(ex.getMessage()).build())
                    .build());
        }

        responseObserver.onCompleted();
    }

    //get request
    @Override
    public void getStockOf(ProductOuterClass.CProduct.Product request, StreamObserver<StockOuterClass.CStock.StockOrError> responseObserver) {
        try {
            Optional<Stock> stock = repository.findById(request.getId());
            //handle data tidak ditemukan
            if (! stock.isPresent()) throw new Exception("Produk tidak ditemukan");

            responseObserver.onNext(StockOuterClass.CStock.StockOrError.newBuilder()
                    .setStock(StockOuterClass.CStock.Stock.newBuilder()
                            .setProductId(stock.get().getProductID())
                            .setNumber(stock.get().getNumber())
                            .setLastIncoming(Timestamp.newBuilder()
                                    .setSeconds(new DateTime(stock.get().getLastIncoming()).getMillis() / 1000)
                                    .build())
                            .setLastOutgoing(Timestamp.newBuilder()
                                    .setSeconds(new DateTime(stock.get().getLastOutgoing()).getMillis() / 1000)
                                    .build())
                            .build())
                    .build());
        } catch (Exception ex) {
            responseObserver.onNext(StockOuterClass.CStock.StockOrError.newBuilder()
                    .setError(Value.newBuilder()
                            .setStringValue(ex.getMessage())
                            .build())
                    .build());
        }

        responseObserver.onCompleted();
    }
}
