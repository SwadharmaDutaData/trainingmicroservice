package com.sdd.stock;

import com.google.protobuf.Empty;
import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Value;
import com.google.protobuf.util.JsonFormat;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.Metadata;
import io.grpc.stub.MetadataUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import product.grpc.LbServiceGrpc;
import product.grpc.StockServiceGrpc;
import product.protobuf.ProductOuterClass;
import product.protobuf.StockOuterClass;

import java.util.Iterator;

public class StockServiceTest {
    private static Logger logger = LoggerFactory.getLogger(StockServiceTest.class);

    public static void main(String[] args) {
        try {
            ManagedChannel channel = ManagedChannelBuilder
                    .forAddress("172.20.0.2", 31801)
                    .usePlaintext()
                    .build();

            for (int i=0; i<1000; i++) {
//                StockOuterClass.CStock.TimestampOrError result =
//                        StockServiceGrpc.newBlockingStub(channel)
//                                .getOutOfStockEstimation(
//                                        ProductOuterClass.CProduct.Product
//                                                .newBuilder()
////                            .setId(1000)
//                                                .build());

                Metadata metadata = new Metadata();
                metadata.put(Metadata.Key.of("Host", Metadata.ASCII_STRING_MARSHALLER), "grpc.stock-service.sdd.com");
                Iterator<Value> result = MetadataUtils.attachHeaders(LbServiceGrpc.newBlockingStub(channel), metadata)
                        .responseFromServer(Empty.newBuilder().build());

                while (result.hasNext()) {
                    String strResult = JsonFormat.printer().print(result.next());
                    logger.info(strResult);
                }
            }
        } catch (InvalidProtocolBufferException e) {
            logger.error(e.getMessage(), e.getCause());
        }
    }

}
