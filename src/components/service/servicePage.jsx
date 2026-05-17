// src/pages/ServicePage.jsx
import { useParams } from "react-router-dom";
import { SERVICES } from "../../data/servicesData"; 
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import EnquiryForm from "../form/EnquiryForm";

export default function ServicePage() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  const [form, setForm] = useState({ name: "", phone: "" });

  if (!service) return <Typography>Service not found</Typography>;

  const handleSubmit = () => {
    console.log({
      ...form,
      service: service.title,
    });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", py: 5, px: 2 }}>
      {/* Title */}
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        {service.title}
      </Typography>

      {/* Points */}
      <Box sx={{ mb: 4 }}>
        {service.points.map((point, i) => (
          <Typography key={i} sx={{ mb: 1 }}>
            • {point}
          </Typography>
        ))}
      </Box>

     <EnquiryForm serviceName={service.title} sheetUrl={service.sheetUrl} />
    </Box>
  );
}