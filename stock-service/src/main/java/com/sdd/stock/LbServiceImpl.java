package com.sdd.stock;

import com.google.protobuf.Empty;
import com.google.protobuf.Value;
import io.grpc.stub.StreamObserver;
import org.lognet.springboot.grpc.GRpcService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import product.grpc.LbServiceGrpc;

import java.net.InetAddress;
import java.net.UnknownHostException;

@GRpcService
public class LbServiceImpl extends LbServiceGrpc.LbServiceImplBase {
    Logger logger = LoggerFactory.getLogger(LbServiceImpl.class);

    @Override
    public void responseFromServer(Empty request, StreamObserver<Value> responseObserver) {
        try {
            InetAddress inetAddress = InetAddress.getLocalHost();
            logger.info("Processed in " + inetAddress.getHostAddress());

            responseObserver.onNext(Value.newBuilder().setStringValue("Processed in " + inetAddress.getHostAddress()).build());
        } catch (UnknownHostException e) {
            logger.error(e.getMessage(), e);
        }

        responseObserver.onCompleted();
    }
}
