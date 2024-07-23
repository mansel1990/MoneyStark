import React, { ReactNode, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridColumnVisibilityModel,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import SoldAtModal from "./SoldAtModal"; // Adjust the path if necessary
import { getColumns } from "../../contexts/SwingTrading/SwingTradingGridColumns";

interface StockTransaction {
  id: number;
  date: string;
  stockSymbol: string;
  quantity: number;
  price: number;
  soldAt?: number; // Optional
}

const initialRows: StockTransaction[] = [
  {
    id: 1,
    date: "2024-07-15",
    stockSymbol: "BAJAJ-AUTO",
    quantity: 3,
    price: 9528,
  },
  {
    id: 2,
    date: "2024-07-15",
    stockSymbol: "BALKRISIND",
    quantity: 5,
    price: 3148,
  },
];

type StockDataGridProps = {
  latestStockData: any;
};

const StockDataGrid = ({ latestStockData }: StockDataGridProps) => {
  const [rows] = useState<StockTransaction[]>(initialRows);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<GridRowId | null>(null);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>({
      fees: false,
      netValue: false,
      notes: false,
    });

  const handleOpenModal = (id: GridRowId) => {
    setSelectedRowId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSave = (date: string, soldAt: number) => {
    handleCloseModal();
  };

  const columns: GridColDef[] = getColumns(handleOpenModal, latestStockData);

  return (
    <div style={{ marginTop: "20px" }}>
      <Box sx={{ height: 400, flexGrow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
          pageSizeOptions={[10, 20, 100]}
          checkboxSelection={false}
          disableRowSelectionOnClick
          sx={{ width: "100%" }}
          disableColumnMenu={false} // Ensure column menu is enabled
        />
        <SoldAtModal
          open={openModal}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      </Box>
    </div>
  );
};

export default StockDataGrid;
