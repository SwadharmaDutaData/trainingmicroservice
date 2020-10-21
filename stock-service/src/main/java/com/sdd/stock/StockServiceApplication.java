package com.sdd.stock;

import io.dekorate.kubernetes.annotation.*;
import io.dekorate.option.annotation.GarbageCollector;
import io.dekorate.option.annotation.JvmOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
public class StockServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockServiceApplication.class, args);
	}

}
