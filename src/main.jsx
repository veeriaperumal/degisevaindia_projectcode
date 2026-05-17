import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./themes/Theme";
import { Toaster } from "react-hot-toast";
// 🔥 AOS
import AOS from "aos";
import "aos/dist/aos.css";

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Toaster position="top-center" reverseOrder={false} />
      <AppRoutes />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);