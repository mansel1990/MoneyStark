import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface SoldAtModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (date: string, soldAt: number) => void;
}

const SoldAtModal: React.FC<SoldAtModalProps> = ({ open, onClose, onSave }) => {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [soldAt, setSoldAt] = useState<number | "">("");

  const handleSave = () => {
    if (date && soldAt) {
      onSave(date, Number(soldAt));
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sell Stock</DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="normal"
          label="Sold At"
          type="number"
          value={soldAt}
          onChange={(e) => setSoldAt(Number(e.target.value))}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SoldAtModal;
