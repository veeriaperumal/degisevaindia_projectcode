import {
  Box,
  Typography,
  IconButton
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "../../assets/images/navLogo.png"
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
  {
    title: "Food Licensing",
    path: "/fssai",
  },
  {
    title: "ISO Certification",
    path: "/iso",
  },
  {
    title: "Government Services",
    path: "/government-services",
  },
  {
    title: "Property Services",
    path: "/property-services",
  },
  {
    title: "Web Development",
    path: "/web-development",
  },
 
];

  const columnStyle = {
    flex: 1,
    minWidth: 220
  };

  const heading = {
    fontWeight: 600,
    fontSize: 18,
    color: "#3a2a1f"
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fff", px: { xs: 2, md: 8 }, py: 6 }}>
        
        {/* ROW */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4
          }}
        >

          {/* LEFT */}
          <Box sx={columnStyle}>
            <img src={Logo} alt="logo" style={{ height: 55 }} />

            <Typography sx={{ mt: 2, color: "#666", lineHeight: 1.7 }}>
              Your trusted gateway to 500+ government & corporate services.
              Simplifying India's most complex processes for entrepreneurs,
              students, and businesses since 2019.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <IconButton size="small"><FacebookIcon /></IconButton>
              <IconButton size="small"><InstagramIcon /></IconButton>
              <IconButton size="small"><XIcon /></IconButton>
              <IconButton size="small"><LinkedInIcon /></IconButton>
            </Box>
          </Box>

          {/* OUR LINKS */}
          <Box sx={columnStyle}>
            <Typography sx={heading}>Our Links</Typography>
            <Box sx={{ width: 50, height: 2, bgcolor: "#f4a100", my: 1.5 }} />
{links.map((item, i) => (
  <Box
    key={i}
    component={Link}
    to={item.path}
    sx={{
      display: "flex",
      alignItems: "center",
      mb: 1.2,
      textDecoration: "none",
      color: "#555",
      transition: "0.2s",
      "&:hover": {
        color: "#f4a100",
        transform: "translateX(3px)",
      },
    }}
  >
    <ArrowForwardIosIcon
      sx={{ fontSize: 12, mr: 1, color: "#f4a100" }}
    />

    <Typography sx={{ fontSize: 14 }}>
      {item.title}
    </Typography>
  </Box>
))}
          </Box>

          {/* HELP */}
          <Box sx={columnStyle}>
            <Typography sx={heading}>Help & Information</Typography>
            <Box sx={{ width: 50, height: 2, bgcolor: "#f4a100", my: 1.5 }} />

            {["Terms & Conditions", "Return Policy"].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 1.2 }}>
                <ArrowForwardIosIcon sx={{ fontSize: 12, mr: 1, color: "#f4a100" }} />
                <Typography sx={{ fontSize: 14, color: "#555" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* CONTACT */}
          <Box sx={columnStyle}>
            <Typography sx={heading}>Contact Us</Typography>
            <Box sx={{ width: 50, height: 2, bgcolor: "#f4a100", my: 1.5 }} />

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ color: "#f4a100", mr: 1 }} />
              <Typography>+91 98765 43210</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ color: "#f4a100", mr: 1 }} />
              <Typography>support@digisevaindia.com</Typography>
            </Box>
          </Box>

        </Box>
      </Box>

      {/* BOTTOM */}
      <Box sx={{ bgcolor: "darkblue", py: 2, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          © 2026 DigiSeva India
        </Typography>
      </Box>
    </>
  );
}