import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useColorMode } from "../../contexts/color-mode";

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
  const { mode } = useColorMode();

  return (
    <div className={`prediction-table${mode}`}>
      {rows.map((row) => (
        <Accordion key={row.id} className="prediction-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${row.id}-content`}
            id={`panel-${row.id}-header`}
          >
            <Typography>{row.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="prediction-details">
              <Typography>Buy At: {row.buyAt}</Typography>
              <Typography>
                Date of Prediction: {row.dateOfPrediction}
              </Typography>
              <Typography>{row.details}</Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PredictionTable;
