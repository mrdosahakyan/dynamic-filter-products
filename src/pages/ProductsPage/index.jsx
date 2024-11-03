import React from "react";
import FilterPanel from "./FilterPanel";
import useProductsFilter from "./FilterPanel/useProductsFilter";
import useFetchProducts from "../../apis/useFetchProduct";
import { Col, Row } from "antd";
import PageWrapper from "../../components/Base/PageWrapper";
import ProductList from "./ProductList";

const ProductsPage = () => {
  const productFilters = useProductsFilter();
  const { filters } = productFilters;
  const { filteredProducts, loading, error, isFetching } =
    useFetchProducts(filters);

  return (
    <PageWrapper title="Product List" isLoading={loading} error={error}>
      <Row gutter={[0, 8]}>
        <Col span={24}>
          <FilterPanel productFilters={productFilters} />
        </Col>
        <Col flex={1}>
          <ProductList
            filteredProducts={filteredProducts}
            isFetching={isFetching && !loading}
            isNoDataFound={!filteredProducts.length && !loading && !isFetching}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default ProductsPage;
