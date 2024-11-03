import React, { useEffect, useState } from "react";

import useDebounce from "../../../hooks/useDebounce";
import Input from "antd/es/input/Input";
import FormItemLabel from "antd/es/form/FormItemLabel";
import FilterWrapper from "../FilterWrapper";

const SearchInput = ({ initialValue, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  return (
    <FilterWrapper label="Search by Name">
      <Input
        // fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
      />
    </FilterWrapper>
  );
};

export default SearchInput;
