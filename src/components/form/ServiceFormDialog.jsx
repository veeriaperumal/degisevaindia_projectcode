import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button
} from "@mui/material";
import { useState } from "react";
import { submitToSheet } from "../../utils/submitToSheet";

export default function ServiceFormDialog({ open, onClose, service }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitToSheet({
        ...form,
        service: service || "General Dialog Enquiry"
      });
      alert("Submitted Successfully!");
      onClose();
    } catch (error) {
      alert("Error submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{service}</DialogTitle>

      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}