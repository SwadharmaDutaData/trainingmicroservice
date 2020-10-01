package com.sdd.stockservice.service;

import com.google.protobuf.Timestamp;
import com.google.protobuf.Value;
import io.grpc.stub.StreamObserver;
import org.joda.time.DateTime;
import org.lognet.springboot.grpc.GRpcService;
import product.grpc.StockServiceGrpc;
import product.protobuf.ProductOuterClass;
import product.protobuf.StockOuterClass;

@GRpcService
public class StockServiceImpl extends StockServiceGrpc.StockServiceImplBase {
    @Override
    public void getOutOfStockEstimation(ProductOuterClass.CProduct.Product request, StreamObserver<StockOuterClass.CStock.TimestampOrError> responseObserver) {
        try {
            if (request.getId() == 0) throw new Exception("ID tidak boleh 0");

            DateTime oosTime = new DateTime(2022,1,5,6,45,9);
            responseObserver.onNext(
                    StockOuterClass.CStock.TimestampOrError.newBuilder().setOutOfStockTime(
                            Timestamp.newBuilder().setSeconds(oosTime.getMillis() / 1000).build()
                    ).build());
        } catch (Exception ex) {
            responseObserver.onNext(
                    StockOuterClass.CStock.TimestampOrError.newBuilder().setError(
                            Value.newBuilder().setStringValue(ex.getMessage()).build()
                    ).build());
        }
        responseObserver.onCompleted();
    }
}
