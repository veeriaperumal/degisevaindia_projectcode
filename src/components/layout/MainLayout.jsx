import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@mui/material";
import WhatsAppFloat from "../common/WhatsappFloat";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Container disableGutters maxWidth={false}>
        <Outlet />  
      </Container>

      <Footer />

      <WhatsAppFloat/>
    </>
  );
}