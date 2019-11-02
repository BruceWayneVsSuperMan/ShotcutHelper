import React, { Component } from 'react';
import { Card,Col,Row } from 'antd';
//import Button from 'antd/es/button';
import './App.css';

import  DataHandler  from './database/handleData'




class App extends Component {
  


  render() {
    function get_list(number) {
    return (
      <Card title={"标题"+number} bordered={false} style={{ width: 300, margin: 5 }}>
            <Row >
              <Col span={7} className="function-name">复制</Col>
              <Col span={17}>Ctrl+C</Col>
              <Col span={7} className="function-name">粘贴</Col>
              <Col span={17}>Ctrl+V</Col>  
            </Row>
      </Card>
    )
  }


  const num = [1,2,3,4,5];
  const listItem = num.map((number)=>get_list(number));
    return (
      <div className="gutter-example">
        <div className="card-style" style={{ background: '#ECECEC', padding: '30px', display: 'flex' }}>
          {
            listItem
          }
        </div>
  </div>
    );
  }
  
}

export default App;

