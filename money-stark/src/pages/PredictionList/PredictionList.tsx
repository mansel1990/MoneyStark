import React from "react";
import PredictionTable from "./PredictionTable";
import SearchBar from "../../components/PredictionList/SearchBar";

const PredictionList = () => {
  const onSearch = (query: string) => {
    // To do - Search logic
  };
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <PredictionTable />
    </div>
  );
};

export default PredictionList;
