import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
  Autocomplete,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSaveStockTransaction } from "../../apis/hooks/useApiStockList";
import { useGetIdentity } from "@refinedev/core";
import { IUser } from "../../components/header/Header";
import { useSnackbar } from "../../components/common/SnackbarProvider";

interface StockFormModalProps {
  open: boolean;
  onClose: () => void;
  latestStockData: any;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const StockFormModal: React.FC<StockFormModalProps> = ({
  open,
  onClose,
  latestStockData: stockData,
}) => {
  const [stockSymbol, setStockSymbol] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const { openSnackbar } = useSnackbar();

  const { mutate: saveStockTransaction, status: saveStatus } =
    useSaveStockTransaction();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await saveStockTransaction({
        date,
        stockSymbol,
        quantity: Number(quantity),
        price: Number(price),
      });
      openSnackbar("Transaction saved successfully.", "success");
    } catch (error) {
      openSnackbar("Failed to save transaction.", "error");
    } finally {
      setSnackbarOpen(true);
      setStockSymbol("");
      setQuantity("");
      setPrice("");
      setDate(new Date().toISOString().split("T")[0]);
      onClose();
    }
  };

  const onStockChange = (event: any, newValue: any) => {
    console.log(newValue, newValue?.NSEID);
    setStockSymbol(newValue.NSEID);
    setPrice(newValue?.pricecurrent);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h2" gutterBottom>
            Add Stock Transaction
          </Typography>
          <IconButton onClick={onClose} style={{ marginBottom: "5px" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={stockData || []}
                getOptionLabel={(option: any) =>
                  `${option.SC_FULLNM} (${option.NSEID})`
                }
                onChange={onStockChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Stock Symbol"
                    variant="outlined"
                    required
                  />
                )}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default StockFormModal;
