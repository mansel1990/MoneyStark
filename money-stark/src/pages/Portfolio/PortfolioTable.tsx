import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { fetchCurrentStockPrice } from "../../apis/stocklist.api";
import { PortfolioData } from "../../sampledata/PortfolioData";
import MaterialTable from "material-table";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// Sample data
const data = PortfolioData;
const columns: GridColDef[] = [
  { field: "date", headerName: "Date" },
  { field: "stockSymbol", headerName: "Stock Symbol" },
  { field: "action", headerName: "Action" },
  { field: "quantity", headerName: "Quantity" },
  { field: "price", headerName: "Price" },
  { field: "totalValue", headerName: "Total Value" },
  { field: "fees", headerName: "Fees" },
  { field: "netValue", headerName: "Net Value" },
  { field: "notes", headerName: "Notes" },
  { field: "currentPrice", headerName: "Current Value" },
  { field: "profitLoss", headerName: "Profit/Loss" },
];

const calculateValues = (quantity: number, price: number) => {
  const totalValue = quantity * price;
  const fees = 0.02 * totalValue;
  const netValue = totalValue - fees;
  return { totalValue, fees, netValue };
};

type StockPrices = {
  [key: string]: number;
};

const PortfolioTable = () => {
  const theme = useTheme();

  const [stockPrices, setStockPrices] = useState<StockPrices>({});

  useEffect(() => {
    const symbols = data.map((row) => row.stockSymbol).join(",");
    const fetchPrices = async () => {
      const currentPriceDataResponse = await fetchCurrentStockPrice(symbols);
      const prices: StockPrices = {};
      console.log("s===>", currentPriceDataResponse);
      setStockPrices(prices);
    };

    fetchPrices();
  }, []);

  const rows = data.map((row, index) => {
    const { totalValue, fees, netValue } = calculateValues(
      row.quantity,
      row.price
    );
    const currentPrice = stockPrices[row.stockSymbol] || row.price;
    const profitLoss = currentPrice * row.quantity - totalValue;

    return {
      id: index,
      date: row.date,
      stockSymbol: row.stockSymbol,
      action: row.action,
      quantity: row.quantity,
      price: row.price,
      totalValue: totalValue.toFixed(2),
      fees: fees.toFixed(2),
      netValue: netValue.toFixed(2),
      notes: row.notes,
      currentPrice: currentPrice.toFixed(2),
      profitLoss: profitLoss.toFixed(2),
    };
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ pageSize: 10, page: 0 }}
        checkboxSelection
      />
    </div>
  );
};

export default PortfolioTable;
