import useFilters from "../../../hooks/useFilters";

const useProductsFilter = () => {
  const initialFilters = {
    category: [],
    brand: [],
    rating: "",
    priceRange: [],
    search: "",
    sort: "",
  };

  const { filters, setFilters, clearFilters } = useFilters(initialFilters);

  const updateCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  const updateBrand = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brand,
    }));
  };

  const updateSearch = (search) => {
    setFilters((prev) => ({
      ...prev,
      search,
    }));
  };

  const updateRating = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating,
    }));
  };

  const updatePriceRange = (priceRange) => {
    setFilters((prev) => ({
      ...prev,
      priceRange,
    }));
  };

  const updateSort = (sort) => {
    setFilters((prev) => ({
      ...prev,
      sort,
    }));
  };

  return {
    filters,
    updateCategory,
    updateBrand,
    updateSearch,
    updateRating,
    updatePriceRange,
    updateSort,
    clearFilters,
  };
};

export default useProductsFilter;
