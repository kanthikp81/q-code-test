import React from "react";

interface SortByProps {
  onChange: (selectedOption: string) => void;
}

const SortBy: React.FC<SortByProps> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort-by">Sort By: </label>
      <select id="sort-by" defaultValue="h-l" onChange={handleChange}>
        <option value="h-l">Price (high-low)</option>
        <option value="l-h">Price (low-high)</option>
      </select>
    </div>
  );
};

export default SortBy;
