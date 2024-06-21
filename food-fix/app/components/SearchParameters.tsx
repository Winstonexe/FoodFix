"use client";

import React from "react";

interface SearchParametersProps {
  fetchData: (query: string) => void;
}

const SearchParameters: React.FC<SearchParametersProps> = ({ fetchData }) => {
  return (
    <div className="search-parameters">
      {["Pasta", "Chicken", "Pork", "Meat", "Beef", "Potato"].map((param) => (
        <button key={param} className="parameter-btn" onClick={() => fetchData(param)}>
          {param}
        </button>
      ))}
    </div>
  );
};

export default SearchParameters;
