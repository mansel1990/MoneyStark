// StockPurchaseModal.js
import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

type StockPurchaseModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
};

const StockPurchaseModal = ({
  open,
  onClose,
  onSubmit,
}: StockPurchaseModalProps) => {
  const [formData, setFormData] = useState({
    id: "",
    stock: "",
    dateAcquired: "",
    boughtAt: "",
    quantity: "",
    buyValue: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Stock Purchase Form</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="ID"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date Acquired"
              name="dateAcquired"
              value={formData.dateAcquired}
              onChange={handleInputChange}
              type="date"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bought At"
              name="boughtAt"
              value={formData.boughtAt}
              onChange={handleInputChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Buy Value"
              name="buyValue"
              value={formData.buyValue}
              onChange={handleInputChange}
              type="number"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StockPurchaseModal;
