import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd';
import Todo from '../shared/Todo';

class Home extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <div>
                            <Card
                                title="Todo List"
                                bordered={false}
                                style={{ marginBottom: "16px"}}
                                extra={<Button type="primary">Add</Button>}
                            >
                                <Todo />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false}>
                                <p>Card content</p>
                                <p>Card content</p>
                                <p>Card content</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <Card title="Card title" bordered={false}>
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