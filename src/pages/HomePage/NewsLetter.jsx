import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";
import { submitToSheet } from "../../utils/submitToSheet";
import NewsletterImg from "../../assets/images/newsletter.png"
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      // alert("Please enter a valid email");
      toast.error("Please enter a valid email")
      return;
    }

    setLoading(true);
    try {
      await submitToSheet(
        {
          mail_id: email,
          action: "Newsletter Subscription",
        },
        "https://script.google.com/macros/s/AKfycbxqHAb2-6KGyn2KQwPAiaOb5twec9YFz0ST8_fd7eI-ncS24QHSw6NyhY_2QJ3FkKv8/exec"
      );
      // setMsg("Thank you for subscribing!");
      toast.success("Thank You for subscribing!")
      setEmail("");
    } catch (error) {
      console.log("Error subscribing.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <Box
  sx={{
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 4 },
    display: "flex",
    justifyContent: "center",
  }}
>
  <Paper
    elevation={3}
    sx={{
      maxWidth: "1100px",
      width: "100%",
      borderRadius: 4,
      p: { xs: 2.5, sm: 3, md: 5 },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      gap: { xs: 3, md: 4 },
      background: "#f8fafc",
    }}
  >
    {/* LEFT IMAGE */}
    <Box
      sx={{
        background: "#e3f2fd",
        p: { xs: 2, md: 3 },
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "100%", md: "auto" },
      }}
    >
      <Box
        component="img"
        src={NewsletterImg}
        alt="Newsletter"
        sx={{
          width: { xs: "90px", sm: "110px", md: "130px" },
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Box>

    {/* RIGHT CONTENT */}
    <Box sx={{ flex: 1, width: "100%" }}>
      
      {/* TITLE */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem",
          },
        }}
      >
        Stay Ahead with DigiSeva
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          mt: 1,
          color: "text.secondary",
          fontSize: {
            xs: "0.9rem",
            sm: "0.95rem",
            md: "1rem",
          },
        }}
      >
        Get tender alerts, government scheme updates, business tips,
        and exclusive offers delivered to your inbox.
      </Typography>

      {/* INPUT + BUTTON */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter your E-mail Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          sx={{
            background: "#fff",
            borderRadius: 2,
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubscribe}
          disabled={loading}
          sx={{
            px: { xs: 2, md: 4 },
            height: { sm: "40px" },
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Box>

      {/* FEATURES */}
      <Typography
        sx={{
          mt: 2,
          fontSize: {
            xs: "0.75rem",
            sm: "0.8rem",
          },
          color: "text.secondary",
          lineHeight: 1.6,
        }}
      >
        ✔ Weekly Tender Alerts • ✔ Govt. Scheme Updates • ✔ Business Tips • ✔ Exclusive Offers
      </Typography>

      {/* SUCCESS MESSAGE */}
      {msg && (
        <Typography
          sx={{
            mt: 1,
            color: "green",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          {msg}
        </Typography>
      )}
    </Box>
  </Paper>
</Box>
  );
}