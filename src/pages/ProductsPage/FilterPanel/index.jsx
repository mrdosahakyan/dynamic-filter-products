import React, { useEffect, useState } from "react";
import {
  brands,
  categories,
  ratingOptions,
  sortOptions,
} from "../../../apis/dummyData";
import SearchInput from "../../../components/FilterComponents/SearchInput";
import PriceRange from "../../../components/FilterComponents/PriceRange";
import { Button, Col, Row, Collapse } from "antd";
import FilterSelect from "../../../components/FilterComponents/FilterSelect";
import useIsMobile from "../../../hooks/useIsMobile";

const { Panel } = Collapse;

const FilterPanel = ({ productFilters }) => {
  const {
    filters,
    updateCategory,
    updateBrand,
    updateRating,
    updatePriceRange,
    updateSort,
    updateSearch,
    clearFilters,
  } = productFilters;

  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  return (
    <Collapse
      activeKey={isCollapsed ? [] : ["1"]}
      onChange={() => setIsCollapsed(!isCollapsed)}
    >
      <Panel header="Filters" key="1">
        <Row gutter={16} justify="center" align="baseline" wrap={false}>
          <Col flex={1}>
            <Row gutter={[8,8]}>
              <SearchInput
                initialValue={filters.search}
                onChange={updateSearch}
              />

              <FilterSelect
                options={categories.map((category) => ({
                  value: category,
                  label: category,
                }))}
                initialValue={filters.category}
                onChange={updateCategory}
                label="Filter By Category"
                multiple
              />

              <FilterSelect
                options={brands.map((brand) => ({
                  value: brand,
                  label: brand,
                }))}
                initialValue={filters.brand}
                onChange={updateBrand}
                label="Filter By Brands"
                multiple
              />

              <PriceRange
                initialValueRange={filters.priceRange}
                onChange={updatePriceRange}
              />

              <FilterSelect
                options={ratingOptions}
                initialValue={filters.rating}
                onChange={updateRating}
                label="Filter By Rate"
              />

              <FilterSelect
                options={sortOptions}
                initialValue={filters.sort}
                onChange={updateSort}
                label="Sort"
              />
            </Row>
          </Col>

          <Col>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default FilterPanel;
