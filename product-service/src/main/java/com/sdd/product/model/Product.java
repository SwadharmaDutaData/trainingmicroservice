package com.sdd.product.model;

import javax.persistence.Entity;
import javax.persistence.Id;

//agar dikenal sebagai model
@Entity
public class Product {
    @Id
    Long id;
    String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
