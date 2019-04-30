import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout style={{minHeight: "100vh"}}>
        <Header>Header</Header>
        <Layout>
          <Content style={{ margin: "16px 16px 0 16px"}}>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
