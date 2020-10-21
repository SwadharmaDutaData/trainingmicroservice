import React from 'react';
import styles from './index.less';
import api from '../api/product';
import { Button, Card, Col, Row, Table } from 'antd';

const axios = require('axios');
const moment = require('moment');


const proxy = 'http://localhost:8080'
// http://192.168.65.51:8080/

//manggil binary
const productAPI = api.product.grpc.ProductService.create(
  (method, request, callback) => {
    axios.post(`${proxy}/product.grpc.ProductService/${method.name}`, Uint8Array.from(request), {
      withCredentials: false,
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/grpc-web-text',
        'Content-Type': 'application/grpc-web-text',
      }
    })
      .then(d => callback(null, new Uint8Array(d.data)))
  }, false, false
)

//manggil json
const productApiJson = (fullMethod: any, request: any) => {
  return axios.post(`${proxy}/${fullMethod}`, request, {
    withCredentials: false,
    responseType: 'json',
    headers: {
      'Accept': 'application/grpc-web-text-json',
      'Content-Type': 'application/grpc-web-text-json',
    }
  })
  .then(d => d.data)
}

export default () => {
  const [ products, setProducts] = React.useState([]);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Card>
        <Row>
          <Col>
            <Button
              onClick={() => {
                // grpc -> binary
                // productAPI.getAllProduct(api.product.protobuf.CProduct.Param.create())
                // .then(data => data.toJSON())
                // .then(data => data.batch.record)
                // .then(data => setProducts(data))  
                // .then(data => console.log(data))

                //json
                productApiJson('product.grpc.ProductService/GetAllProduct', {})
                .then(data => data [0])
                .then(data => data.batch.record)
                .then(data => setProducts(data))
              }}
            >Test Product Service</Button>
          </Col>
        </Row>
        <Row>
          <Col>
              <Table 
                columns={[
                  {title : 'ID Product', dataIndex: 'id'},
                  {title : 'Nama Product', dataIndex: 'name'},
                  {title : 'OutOfStockInfo', dataIndex: 'outOfStockInfo',
                  render: (cell) => {
                    //grpc
                    // return moment.unix(cell.outOfStockTime.seconds).format()
                    //json
                    return cell.outOfStockTime
                  }
                }
                ]}
                dataSource={products}
              />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
