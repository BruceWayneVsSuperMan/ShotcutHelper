import React, { Component } from 'react';
import {Row,Col,Card} from 'antd';
//import Button from 'antd/es/button';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" span={8}>
        <div className="gutter-box">col-8</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div className="gutter-box">col-8</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div className="gutter-box">col-8</div>
      </Col>
    </Row>
    <div className="card-style" style={{ background: '#ECECEC', padding: '30px',display:'flex'}}>
    <Card title="Card title" bordered={false} style={{ width: 300 , margin:5 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card title" bordered={false} style={{ width: 300 , margin:5}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card title" bordered={false} style={{ width: 300 , margin:5}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card title" bordered={false} style={{ width: 300 , margin:5}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card title" bordered={false} style={{ width: 300 , margin:5}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <div></div>
  </div>
  </div>
    );
  }
}

export default App;

