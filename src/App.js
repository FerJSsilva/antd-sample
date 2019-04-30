import React from 'react';
import { Layout, Col } from 'antd';
import Home from './pages/Home';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>Header</Header>
        <Layout>
          <Content style={{ margin: "16px 16px 0 16px" }}>
            <Home />
          </Content>
        </Layout>
        <Footer>
          <Col span={24} style={{ textAlign: 'center' }}>
            React Course Monitora
            <br />
            version 0.1
          </Col>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
