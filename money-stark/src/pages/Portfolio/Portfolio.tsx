import React, { useState } from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccordionList from "../../components/common/AccordionList";
import StockPurchaseModal from "../../components/Portfolio/StockPurchaseModal";

// Define the Stock interface
interface Stock {
  id: number;
  stock: string;
  dateAcquired: string;
  boughtAt: number;
  quantity: number;
  buyValue: number;
}

const stockData: Stock[] = [
  {
    id: 1,
    stock: "TCS",
    dateAcquired: "2024-05-14",
    boughtAt: 3903.05,
    quantity: 10,
    buyValue: 39030.5,
  },
  {
    id: 2,
    stock: "ANGELONE",
    dateAcquired: "2024-05-15",
    boughtAt: 2675,
    quantity: 4,
    buyValue: 10700,
  },
  {
    id: 3,
    stock: "JIOFIN",
    dateAcquired: "2024-05-15",
    boughtAt: 355.45,
    quantity: 40,
    buyValue: 14218,
  },
  {
    id: 4,
    stock: "KOTAKBANK",
    dateAcquired: "2024-05-15",
    boughtAt: 1686.04,
    quantity: 28,
    buyValue: 47209.12,
  },
  {
    id: 5,
    stock: "CAMS",
    dateAcquired: "2024-05-15",
    boughtAt: 3443.85,
    quantity: 6,
    buyValue: 20663.1,
  },
];

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (formData: Stock) => {
    console.log("Form submitted:", formData);
  };

  const handleStockClick = (stock: Stock) => {
    setSelectedStock(stock);
  };

  const totalBuyValue = stockData.reduce(
    (total, stock) => total + stock.buyValue,
    0
  );

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Open Form
      </Button>
      <StockPurchaseModal
        open={openModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <AccordionList rows={stockData} />
    </>
  );
};

export default Portfolio;
