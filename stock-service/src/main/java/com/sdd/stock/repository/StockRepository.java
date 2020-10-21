package com.sdd.stock.repository;

import com.sdd.stock.model.Stock;
import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends CrudRepository<Stock, Long> {


}
