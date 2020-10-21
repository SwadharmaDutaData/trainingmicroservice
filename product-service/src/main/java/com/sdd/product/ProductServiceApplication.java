package com.sdd.product;

import io.dekorate.kubernetes.annotation.*;
import io.dekorate.option.annotation.GarbageCollector;
import io.dekorate.option.annotation.JvmOptions;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@KubernetesApplication(replicas = 2,
//		envVars = { @Env(name = "propertyEnv", value = "Hello from env!"),
//				@Env(name = "propertyFromMap", value = "property1", configmap = "sample-configmap") },
		envVars = {
				@Env(name = "VALUE", value = "v1"),
		},
		expose = true,
		ports = {
				@Port(name = "http", containerPort = 8080/*, hostPort = 8080*/),
				@Port(name = "grpc", containerPort = 9090/*, hostPort = 9090*/)
		},
		labels = @Label(key = "version", value = "v1")
//		initContainers = @Container(image = "foo/bar")
)
@JvmOptions(server = true, xmx = 256, gc = GarbageCollector.SerialGC)
public class ProductServiceApplication {
	//mengambil value dari properties
	@Value("${stock-service.channel.host}")
	String stockChannelHost;
	@Value("${stock-service.channel.port}")
	String stockChannelPort;

	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

	//bean
	//mengakses stock versi lokal
	//diberi nama
	@Bean("stockChannel")
	public ManagedChannel stockChannel() {
		return ManagedChannelBuilder
				.forAddress(stockChannelHost, Integer.parseInt(stockChannelPort))
				.usePlaintext()
				.build();
	}

}
