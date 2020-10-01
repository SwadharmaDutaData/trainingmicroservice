package com.sdd.stockservice;

import io.dekorate.kubernetes.annotation.Env;
import io.dekorate.kubernetes.annotation.KubernetesApplication;
import io.dekorate.kubernetes.annotation.Label;
import io.dekorate.kubernetes.annotation.Port;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@KubernetesApplication(
		replicas = 1,
		envVars = @Env(name = "VALUE", value = "v1"),
		expose = true,
		ports = {
				@Port(name = "http", containerPort = 8080, hostPort = 8080),
				@Port(name = "grpc", containerPort = 9090, hostPort = 9090)
		},
		labels = @Label(key = "version", value = "v1")
)
public class StockServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockServiceApplication.class, args);
	}

}
