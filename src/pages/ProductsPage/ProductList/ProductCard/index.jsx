import React from "react";
import { Card, Col, Rate } from "antd";

const ProductCard = ({ product }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        cover={
          <img
            alt={product.name}
            src={product.imageUrl}
            style={{ height: "100px", objectFit: "cover" }}
          />
        }
      >
        <Card.Meta
          title={product.name}
          description={
            <>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <Rate allowHalf defaultValue={product.rating} disabled />
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default ProductCard;
