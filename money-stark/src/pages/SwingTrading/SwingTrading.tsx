import React, { useState } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import StockFormModal from "./StockFormModal";
import StockDataGrid from "./StockDataGrid";
import { useGetLatestStockPrice } from "../../apis/hooks/useApiStockList";

const SwingTrading = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    data: latestStockData,
    status: loadingStockData,
    error: loadingStockDataError,
  } = useGetLatestStockPrice();

  return (
    <>
      {loadingStockData === "pending" ? (
        <CircularProgress />
      ) : (
        <>
          <Box style={{ marginTop: "20px" }}>
            <Button variant="contained" onClick={() => setModalOpen(true)}>
              Add Stock Transaction
            </Button>
            <StockFormModal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              latestStockData={latestStockData}
            />
            <StockDataGrid latestStockData={latestStockData} />
          </Box>
        </>
      )}
    </>
  );
};

export default SwingTrading;
