import { Col, Flex, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const FilterWrapper = ({ label, children }) => {
  return (
    <Col>
      <Flex style={{ minWidth: "150px" }} vertical gap={8} wrap={false}>
        {label && <Text>{label}</Text>}
        {children}
      </Flex>
    </Col>
  );
};

export default FilterWrapper;
