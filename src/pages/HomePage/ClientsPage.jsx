import { Box, Typography, Paper, Grid, Container } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import BoltIcon from "@mui/icons-material/Bolt";
import LockIcon from "@mui/icons-material/Lock";
import documentsImg from "../../assets/images/documents.png"
import ClientBg from "../../assets/images/clientsBg.png"


import SecureIcon from "../../assets/icons/secure.png"
import fastProcess from "../../assets/icons/fastIcon.png"
import nationWide from "../../assets/icons/nationWide.png"
import ExpertIcon from "../../assets/icons/expertsIcon.png"



const features = [
  {
    icon: nationWide,
    title: "Nation-wide Reach",
    desc: "Serving clients across all 28 states with local expertise."
  },
  {
    icon: ExpertIcon,
    title: "Professional Experts",
    desc: "Specialists in finance, education and government processes."
  },
  {
    icon: SecureIcon,
    title: "Secure & Certified",
    desc: "ISO 9001 certified. Data is protected with us securely."
  },
  {
    icon: fastProcess,
    title: "Fast Processing",
    desc: "Workflows that cut processing time by up to 70%."
  }
];

export default function WhySection() {
  return (
     <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",

        // ✅ BG IMAGE
        backgroundImage: `url(${ClientBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >


      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* TOP TITLE */}
        <Box sx={{ textAlign: "center", mb: 3 }} data-aos="fade-up">

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.2rem",
              },
            }}
          >
            WHY CHOOSE{" "}
            <Box component="span" sx={{ color: "#f4a940" }}>
              DIGISEVA INDIA
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#6b7280",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
            }}
          >
            RECOGNIZED & AFFILIATED WITH
          </Typography>
        </Box>

        {/* ✅ TOP IMAGE (LOGOS) */}
        <Box
          data-aos="zoom-in"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 5, md: 6 },
          }}
        >
          <Box
            component="img"
            src={documentsImg}
            alt="Affiliations"
            sx={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* SECOND TITLE */}
        <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
      
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "1.4rem",
                sm: "1.7rem",
                md: "2.2rem",
              },
            }}
          >
            Why{" "}
            <Box component="span" sx={{ color: "#3b82f6" }}>
              25,000+
            </Box>{" "}
            Clients Trust Us
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#6b7280",
              maxWidth: 700,
              mx: "auto",
              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
                md: "1rem",
              },
              lineHeight: 1.6,
            }}
          >
            For over 5 years, we've been the trusted partner for entrepreneurs,
            students, and businesses navigating India's regulatory landscape —
            with speed, transparency, and genuine care.
          </Typography>
        </Box>

        {/* FEATURES */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            mt: 4,
          }}
        >
          {features.map((item, i) => (
            <Box
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              sx={{
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: "48%",
                },
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                alignContent:"start"
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  p: { xs: 2, md: 3 },
                  borderRadius: 4,
                  background: "#ffffff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  transition: "0.3s",
                  width: "100%",
                  minHeight: 100,

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                {/* ICON */}
       <Box
  sx={{
    width: { xs: 40, md: 50 },
    height: { xs: 40, md: 50 },
    minWidth: { xs: 40, md: 50 },
    borderRadius: 3,
    overflow: "hidden",
    background: "#eef2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    component="img"
    src={item.icon}
    alt={item.title}
    sx={{
      width: "65%",
      height: "65%",
      objectFit: "contain",
    }}
  />
</Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      mb: 0.5,
                      textAlign:"start",
                      fontSize: {
                        xs: "0.95rem",
                        md: "1.02rem",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6b7280",
                      textAlign:"start",

                      fontSize: {
                        xs: "0.8rem",
                        md: "0.9rem",
                      },
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}