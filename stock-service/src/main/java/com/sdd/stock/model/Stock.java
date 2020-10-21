package com.sdd.stock.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {
    @Id
//    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Long productID;
    private Integer number;
    private String lastIncoming;
    private String lastOutgoing;

    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long productID) {
        this.productID = productID;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getLastIncoming() {
        return lastIncoming;
    }

    public void setLastIncoming(String lastIncoming) {
        this.lastIncoming = lastIncoming;
    }

    public String getLastOutgoing() {
        return lastOutgoing;
    }

    public void setLastOutgoing(String lastOutgoing) {
        this.lastOutgoing = lastOutgoing;
    }
}
