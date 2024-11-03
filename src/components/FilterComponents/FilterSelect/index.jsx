import React, { useEffect } from "react";
import { Select } from "antd";
import FilterWrapper from "../FilterWrapper";

const { Option } = Select;

const FilterSelect = ({ options, initialValue, onChange, label, multiple }) => {
  const [selectedValues, setSelectedValues] = React.useState(initialValue);

  useEffect(() => {
    setSelectedValues(initialValue);
  }, [initialValue]);

  const handleChange = (value) => {
    setSelectedValues(value);
    onChange(value);
  };

  return (
    <FilterWrapper label={label}>
      <Select
        {...(multiple && { mode: "multiple" })}
        value={selectedValues}
        onChange={handleChange}
        placeholder={label}
        style={{ width: "100%" }}
        allowClear
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </FilterWrapper>
  );
};

export default FilterSelect;
