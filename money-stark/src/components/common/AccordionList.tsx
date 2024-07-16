import React from "react";
import { useColorMode } from "../../contexts/color-mode";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  rows: {
    id?: number;
    title?: string;
    buyAt?: number;
    dateOfPrediction?: string;
    details?: string;
    stock?: string;
    dateAcquired?: string;
    boughtAt?: number;
    quantity?: number;
    buyValue?: number;
  }[];
};

const AccordionList = ({ rows }: Props) => {
  const { mode } = useColorMode();

  return (
    <div className={`prediction-table ${mode}`}>
      {rows.map((row) => (
        <Accordion key={row.id} className="prediction-item">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${row.id}-content`}
            id={`panel-${row.id}-header`}
          >
            <Typography>{row.title || row.stock || "No title"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="prediction-details">
              {row.buyAt && <Typography>Buy At: {row.buyAt}</Typography>}
              {row.dateOfPrediction && (
                <Typography>
                  Date of Prediction: {row.dateOfPrediction}
                </Typography>
              )}
              {row.details && <Typography>{row.details}</Typography>}
              {row.stock && <Typography>Stock: {row.stock}</Typography>}
              {row.dateAcquired && (
                <Typography>Date Acquired: {row.dateAcquired}</Typography>
              )}
              {row.boughtAt && (
                <Typography>Bought At: {row.boughtAt}</Typography>
              )}
              {row.quantity && (
                <Typography>Quantity: {row.quantity}</Typography>
              )}
              {row.buyValue && (
                <Typography>Buy Value: {row.buyValue}</Typography>
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionList;
