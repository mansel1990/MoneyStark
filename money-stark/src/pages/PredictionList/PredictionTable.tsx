import React from "react";

import AccordionList from "../../components/common/AccordionList";

const rows = [
  {
    id: 1,
    title: "SEAMEC",
    buyAt: 100,
    dateOfPrediction: "2024-04-10",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus nisl ut ullamcorper scelerisque.",
  },
  {
    id: 2,
    title: "MSTC",
    buyAt: 50,
    dateOfPrediction: "2024-03-10",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus nisl ut ullamcorper scelerisque.",
  },
  {
    id: 3,
    title: "ASIANPAINT",
    buyAt: 500,
    dateOfPrediction: "2024-06-10",
    details: "Asian paints",
  },
];

const PredictionTable = () => {
  return <AccordionList rows={rows} />;
};

export default PredictionTable;
