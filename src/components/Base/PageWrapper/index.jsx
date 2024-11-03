import React from "react";
import { Layout, Typography, Row, Col, Spin } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const PageWrapper = ({ title, isLoading, error, children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#f0f2f5", padding: "0 20px" }}>
        <Title level={2} style={{ margin: 0 }}>
          {title}
        </Title>
      </Header>
      <Content style={{ padding: "20px" }}>
        {isLoading && (
          <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <Col>
              <Spin size="large" />
            </Col>
          </Row>
        )}
        {!isLoading && error && (
          <div
            style={{ textAlign: "center", color: "red", marginBottom: "20px" }}
          >
            <h3>Error: {error}</h3>
          </div>
        )}
        {!isLoading && !error && children}
      </Content>
    </Layout>
  );
};

export default PageWrapper;
