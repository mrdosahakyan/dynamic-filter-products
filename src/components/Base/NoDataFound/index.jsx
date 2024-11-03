import React from "react";
import { Empty } from "antd";

const NoDataFound = ({ title = "No data found" }) => {
  return (
    <Empty
      description={<span>{title}</span>}
      imageStyle={{
        height: 100,
      }}
      style={{ marginTop: "50px" }}
    />
  );
};

export default NoDataFound;
