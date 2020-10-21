package com.sdd.product.repository;

import com.sdd.product.model.Product;
import org.springframework.data.repository.CrudRepository;

//repository sebagai jembatan antara database dengan model
//dimana product primary keynya Long
public interface ProductRepository extends CrudRepository<Product, Long> {
}
