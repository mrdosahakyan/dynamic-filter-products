import { useState, useEffect } from "react";
import { mockProductsData } from "./dummyData";
import useFetchDummyData from "../hooks/useFetchDummyData";

const useFetchProducts = (filters) => {
  const {
    data: products,
    loading,
    error,
  } = useFetchDummyData(mockProductsData);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const applyFilters = (products) => {
    let updatedProducts = [...products];

    if (filters.category.length) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.category.includes(product.category)
      );
    }
    if (filters.brand.length) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }
    if (filters.rating) {
      updatedProducts = updatedProducts.filter(
        (product) => Math.floor(product.rating) === Number(filters.rating)
      );
    }

    const [min, max] = filters?.priceRange;
    if (min !== undefined && max !== undefined) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    if (filters.search) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.sort) {
      if (filters.sort === "priceAsc") {
        updatedProducts.sort((a, b) => a.price - b.price);
      } else if (filters.sort === "priceDesc") {
        updatedProducts.sort((a, b) => b.price - a.price);
      } else if (filters.sort === "rating") {
        updatedProducts.sort((a, b) => b.rating - a.rating);
      }
    }

    return updatedProducts;
  };

  useEffect(() => {
    if (products) {
      setIsFetching(true);
      setTimeout(() => {
        const updatedProducts = applyFilters(products);
        setFilteredProducts(updatedProducts);
        setIsFetching(false);
      }, 1000);
    }
  }, [products, filters]);

  return { filteredProducts, loading, error, isFetching };
};

export default useFetchProducts;
