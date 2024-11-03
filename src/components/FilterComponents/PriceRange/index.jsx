import React, { useEffect, useState } from "react";
import { Col, Row, Slider } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import FilterWrapper from "../FilterWrapper";

const PriceRange = ({ initialValueRange, onChange }) => {
  const min = 0;
  const max = 500;

  const [range, setRange] = useState([]);

  useEffect(() => {
    if (initialValueRange) {
      setRange(initialValueRange);
    } else {
      setRange([]);
    }
  }, [initialValueRange]);

  const handleChange = (value) => {
    setRange(value);
    onChange(value);
  };

  const handleClear = () => {
    setRange([]);
    onChange([]);
  };

  return (
    <FilterWrapper label="Price Range">
      <Row justify="center" align="top">
        <Col flex={1}>
          <Slider
            range
            value={range.length ? range : undefined}
            onChangeComplete={handleChange}
            min={min}
            max={max}
            marks={{
              [min]: `${min}`,
              [max]: `${max}`,
            }}
          />
        </Col>
        <Col style={{ height: "inherit" }}>
          <CloseCircleOutlined
            onClick={handleClear}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
        </Col>
      </Row>
    </FilterWrapper>
  );
};

export default PriceRange;
