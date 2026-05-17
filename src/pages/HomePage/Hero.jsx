import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Paper
} from "@mui/material";
import ServicesSection from "./ServiceSection";
import WhySection from "./ClientsPage";
import Newsletter from "./NewsLetter";
import HowItWorks from "./HowItWorks";
import RightContentImg from "../../assets/images/heroContent.png"
import BgImage from "../../assets/images/heroBg.png"
import SearchSection from "./SearchSection";
// import SearchIcon from "@mui/icons-material/Search";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
   <>
     <Box
      sx={{
        px: { xs: 2, sm: 3, md: 10 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 5, md: 4 },
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        position: "relative",
      }}
    >

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          maxWidth: { md: "55%" },
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            display: "inline-block",
            px: 3,
            py: 1,
            borderRadius: "30px",
            background: "linear-gradient(90deg,#f1f5f9,#dbeafe)",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
            }}
          >
            🏅 Trusted by 25,000+ clients across India
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: {xs:18,md:22,lg:36},
            lineHeight: 1.3,
            mb:2,
            color: "#111",
          }}
        >
          Your Gateway to{" "}
          <Box component="span" sx={{ color: "#1976d2" }}>
            500+
          </Box>{" "}
          Government & Corporate Services
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            my: 3,
            color: "#6b7280",
            fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
            maxWidth: "520px",
          }}
        >
          From company registration to global education — DigiSeva India
          simplifies India's most complex government & corporate processes
          into one trusted digital experience
        </Typography>

        {/* Stats Card */}
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: { xs: 2, md: 3 },
            borderRadius: 3,

            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "repeat(4, 1fr)",
            },
            gap: 2,
            textAlign: "center",
          }}
        >
          {[
            { value: "25K+", label: "Happy Clients" },
            { value: "500+", label: "Services" },
            { value: "4.8 ★", label: "Rating" },
            { value: "5yr", label: "Experience" },
          ].map((item, i) => (
            <Box key={i}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                }}
              >
                {item.value}
              </Typography>

              <Typography
                sx={{
                  fontSize: "clamp(0.75rem, 2.5vw, 0.85rem)",
                  color: "#6b7280",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>

      {/* RIGHT IMAGE (HIDE BELOW MD) */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" }, 
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src={RightContentImg}
          alt="services"
          sx={{
            width: "100%",
            maxWidth: { md: "400px", lg: "420px" },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>


    <SearchSection/>
    <ServicesSection/>

    <WhySection/>

    <HowItWorks/>

    <Newsletter/>

    
    </>
  );
};

export default HeroSection;