import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Home extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <div style={{backgroundColor: "green"}}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={{backgroundColor: "green"}}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={{backgroundColor: "green"}}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={{backgroundColor: "green"}}>col-6</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;