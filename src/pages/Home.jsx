import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

class Home extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false} style={{ width: 300 }}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;