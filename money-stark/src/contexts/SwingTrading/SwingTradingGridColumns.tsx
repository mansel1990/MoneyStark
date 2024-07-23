import React from "react";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const calculateTotalValue = (quantity: number, price: number) => {
  return quantity * price;
};

const calculateFees = (totalValue: number) => {
  return 0.002 * totalValue;
};

const calculateNetValue = (totalValue: number, fees: number) => {
  return totalValue - fees;
};

export const getColumns = (
  handleOpenModal: (id: number) => void,
  data: any
): GridColDef[] => {
  return [
    { field: "date", headerName: "Date", flex: 1.5, sortable: true },
    {
      field: "stockSymbol",
      headerName: "Stock Symbol",
      flex: 1.5,
      sortable: true,
    },
    { field: "quantity", headerName: "Quantity", flex: 1, sortable: true },
    { field: "price", headerName: "Price", flex: 1, sortable: true },
    {
      field: "totalValue",
      headerName: "Total Value",
      flex: 1,
      sortable: true,
      valueGetter: (params: GridCellParams) => {
        return calculateTotalValue(params.row.quantity, params.row.price);
      },
    },
    {
      field: "fees",
      headerName: "Fees",
      flex: 1,
      sortable: true,
      valueGetter: (params: GridCellParams) => {
        const totalValue = calculateTotalValue(
          params.row.quantity,
          params.row.price
        );
        return calculateFees(totalValue);
      },
    },
    {
      field: "netValue",
      headerName: "Net Value",
      flex: 1,
      sortable: true,
      valueGetter: (params: GridCellParams) => {
        const totalValue = calculateTotalValue(
          params.row.quantity,
          params.row.price
        );
        const fees = calculateFees(totalValue);
        return calculateNetValue(totalValue, fees);
      },
    },
    {
      field: "currentValue",
      headerName: "Current Value",
      flex: 1,
      sortable: true,
      valueGetter: (params: GridCellParams) => {
        const stock = data.find(
          (stock: any) => stock.NSEID === params.row.stockSymbol
        );
        return stock ? stock.pricecurrent : params.row.price;
      },
    },
    {
      field: "profitLoss",
      headerName: "Profit Loss",
      flex: 1,
      sortable: true,
      valueGetter: (params: GridCellParams) => {
        const price = params.row.price;
        const stock = data.find(
          (stock: any) => stock.NSEID === params.row.stockSymbol
        );
        const currentValue = stock?.pricecurrent ?? price;
        const profitLoss = currentValue - price;
        return isNaN(profitLoss) ? null : profitLoss; // Return null if NaN
      },
    },
    {
      field: "soldAt",
      headerName: "Sold At",
      flex: 1,
      sortable: false,
      renderCell: (params: GridCellParams) => {
        const soldAtValue = params.value;

        if (soldAtValue != null && soldAtValue !== "") {
          return <span>{soldAtValue as React.ReactNode}</span>;
        }

        return (
          <Button
            variant="outlined"
            onClick={() => handleOpenModal(params.id as number)}
          >
            Sell
          </Button>
        );
      },
    },
    {
      field: "profitLossMade",
      headerName: "Profit/Loss Made",
      flex: 1,
      sortable: true,
      valueGetter: (params: GridCellParams) => {
        const netValue = params.row.netValue; // Assuming netValue is calculated
        const currentValue = params.row.currentValue; // Replace with actual current value logic
        const profitLoss = currentValue - netValue;
        return isNaN(profitLoss) ? null : profitLoss; // Return null if NaN
      },
    },
    { field: "percentage", headerName: "Percentage", flex: 1, sortable: true },
  ];
};
