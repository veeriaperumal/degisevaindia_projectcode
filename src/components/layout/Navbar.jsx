import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
// import Logo from "../../assets/icons/logo.png"
import Logo from "../../assets/icons/logo.png"

const navLinks = [
  // { label: "Home", path: "/" },
  { label: "Business SetUp", path: "/business" },
  { label: "Financial", path: "/financial" },
  { label: "Tenders", path: "/tenders" },
  { label: "Global Education", path: "/globalEducation" },
  { label: "Fssai", path: "/fssai" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);
const location = useLocation();
  return (
     <>
    <AppBar
  position="sticky"
  sx={{
    background: "#fff",
    color: "#111",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    px: { xs: 2, md: 4 },
  }}
>
  <Toolbar
    sx={{
      minHeight: { xs: 60, md: 80 },
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
    }}
  >
    {/* ✅ LOGO */}
    <Box
      component={Link}
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0, // 🔥 prevents logo from shrinking
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        sx={{
          height: { xs: 40, md: 60 },
          width: "auto",
        }}
      />
    </Box>

    {/* ✅ CENTER MENU */}
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flex: 1,                      
        justifyContent: "center",     
        gap: { md: 2, lg: 4 },        // 🔥 smaller gap on laptops
        overflow: "hidden",
      }}
    >
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;

        return (
          <Button
            key={link.label}
            component={Link}
            to={link.path}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: {
                md: "0.75rem",  // 🔥 smaller on laptop
                lg: "0.85rem",
              },
              color: isActive ? "#f4a940" : "#374151",
              whiteSpace: "nowrap", // 🔥 prevent break

              position: "relative",

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: isActive ? "100%" : "0%",
                height: "2px",
                backgroundColor: "#f4a940",
                transition: "0.3s",
              },

              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            {link.label}
          </Button>
        );
      })}
    </Box>

    {/* ✅ CTA BUTTON */}
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        flexShrink: 0, // 🔥 prevent shrink
      }}
    >
      <Button
        variant="contained"
        component={Link}
        to="/contact"
        sx={{
          background: "#1e88e5",
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "10px",
          px: { md: 2, lg: 2 },   // 🔥 responsive padding
          fontSize: { md: "0.8rem", lg: "0.9rem" },

          "&:hover": {
            background: "#1565c0",
          },
        }}
      >
        Contact Us
      </Button>
    </Box>

    {/* ✅ MOBILE MENU */}
    <IconButton
      sx={{ display: { xs: "block", md: "none" } }}
      onClick={() => setOpen(true)}
    >
      <MenuIcon />
    </IconButton>
  </Toolbar>
</AppBar>

      {/* DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* Mobile CTA */}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/contact"
                onClick={() => setOpen(false)}
                sx={{
                  mt: 2,
                  background: "#1e88e5",
                  textTransform: "none",
                }}
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}