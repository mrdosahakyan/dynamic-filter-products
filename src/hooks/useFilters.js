import useLocaleStorage from "./useLocaleStorage";

const useFilters = (initialFilters) => {
  const [filters, setFilters] = useLocaleStorage(
    "selectedFilters",
    initialFilters
  );

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return {
    filters,
    setFilters,
    clearFilters,
  };
};

export default useFilters;
