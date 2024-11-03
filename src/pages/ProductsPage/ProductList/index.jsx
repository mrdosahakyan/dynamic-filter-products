import { Pagination, Row, Spin } from "antd";
import NoDataFound from "../../../components/Base/NoDataFound";
import ProductCard from "./ProductCard";

const ProductList = ({ filteredProducts, isFetching, isNoDataFound }) => {
  return (
    <Spin spinning={isFetching && !!filteredProducts}>
      <Row gutter={[16, 16]} justify={isNoDataFound ? "center" : "start"}>
        {isNoDataFound ? (
          <NoDataFound />
        ) : (
          <>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </Row>
    </Spin>
  );
};

export default ProductList;
