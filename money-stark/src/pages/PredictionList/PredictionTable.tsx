import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { getPredictionListColumns } from "../../contexts/PredictionList/PrdictionListColumns";

const rows = [
  {
    id: 1,
    title: "SEAMEC",
    buyAt: 100,
    dateOfPrediction: "2024-04-10",
  },
  {
    id: 2,
    title: "MSTC",
    buyAt: 50,
    dateOfPrediction: "2024-03-10",
  },
];

const PredictionTable = () => {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={getPredictionListColumns()}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default PredictionTable;
