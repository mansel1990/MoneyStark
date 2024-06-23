export type renderCellType = {
  value: any;
};

export const getPredictionListColumns = () => {
  return [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "data-grid-header",
      type: "number",
      minWidth: 50,
    },
    {
      field: "title",
      flex: 3,
      headerClassName: "data-grid-header",
      headerName: "Title",
      minWidth: 200,
    },
    {
      field: "buyAt",
      flex: 1,
      headerClassName: "data-grid-header",
      headerName: "Buy At",
      minWidth: 200,
    },
    {
      field: "dateOfPrediction",
      flex: 1,
      headerClassName: "data-grid-header",
      headerName: "Date of Prediction",
      minWidth: 200,
    },
  ];
};
