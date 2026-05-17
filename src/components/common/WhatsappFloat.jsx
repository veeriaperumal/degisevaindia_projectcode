import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppFloat() {
  const phoneNumber = "+91 8608378040";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: "#25D366",
          color: "#fff",
          width: 60,
          height: 60,
          "&:hover": {
            backgroundColor: "#1ebe5d",
          },
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
}
