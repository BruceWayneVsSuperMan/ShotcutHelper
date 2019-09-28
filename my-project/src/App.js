import React, { Component } from 'react';
import { Card,Col,Row } from 'antd';
//import Button from 'antd/es/button';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="gutter-example">
        <div className="card-style" style={{ background: '#ECECEC', padding: '30px', display: 'flex' }}>
          <Card title="Card title" bordered={false} style={{ width: 300, margin: 5 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Card title" bordered={false} style={{ width: 300, margin: 5 }}>
            <Row style={{width:300}}>
              <Col span={7}>Ctrl+C</Col>
              <Col span={14}>复制</Col>
              <Col span={7}>Ctrl+v</Col>
              <Col span={14}>粘贴</Col>
            </Row>
          </Card>
          <Card title="Card title" bordered={false} style={{ width: 300, margin: 5 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
  </div>
    );
  }
}

export default App;

