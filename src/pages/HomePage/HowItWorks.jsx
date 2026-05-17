import { Box, Typography } from "@mui/material";
import HowItWorksBg from "../../assets/images/howItWorksBg.png"

const steps = [
  {
    id: "01",
    title: "Choose Your Service",
    desc: "Select the service that matches your needs."
  },
  {
    id: "02",
    title: "Fill Out the Form",
    desc: "Provide your basic details to get started."
  },
  {
    id: "03",
    title: "We Contact You",
    desc: "Our team reaches out to understand your requirements."
  },
  {
    id: "04",
    title: "We Handle the Process",
    desc: "Sit back while we take care of everything for you."
  }
];

export default function HowItWorks() {
  return (
   <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",

        // ✅ Background Image
        backgroundImage: `url(${HowItWorksBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    
      {/* <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.9)", // change if bg is dark
          zIndex: 0,
        }}
      /> */}

      {/* ✅ Content Wrapper */}
      <Box sx={{ position: "relative", zIndex: 1 }} >
        {/* HEADER */}
        <Typography
         data-aos="fade-up"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "1.5rem",
              sm: "1.8rem",
              md: "2.2rem",
            },
          }}
        >
          How it{" "}
          <Box component="span" sx={{ color: "#f4a940" }}>
            works
          </Box>
        </Typography>

        <Typography
         data-aos="fade-up"
          sx={{
            mt: 1,
            color: "#6b7280",
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
          }}
        >
          Our service process
        </Typography>

        {/* LINE */}
        <Box
          sx={{
            width: { xs: 120, md: 200 },
            height: 2,
            background: "#1e5fa3",
            mx: "auto",
            mt: 2,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              background: "#1e5fa3",
              borderRadius: "50%",
              position: "absolute",
              left: 0,
              top: -3,
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              background: "#1e5fa3",
              borderRadius: "50%",
              position: "absolute",
              right: 0,
              top: -3,
            }}
          />
        </Box>

        {/* STEPS */}
        <Box
          sx={{
            mt: { xs: 5, md: 8 },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: { xs: 4, md: 6 },
            position: "relative",
          }}
        >
          {/* DOTTED LINE (Desktop only) */}
          <Box
            sx={{
              position: "absolute",
              top: { md: 35 },
              left: "10%",
              right: "10%",
              borderTop: "2px dashed #f4a940",
              zIndex: 0,
              display: { xs: "none", md: "block" },
            }}
          />

          {steps.map((step) => (
            <Box
              key={step.id}
              sx={{
                width: { xs: "100%", sm: "45%", md: "22%" },
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* CIRCLE */}
              <Box
                sx={{
                  width: { xs: 55, md: 70 },
                  height: { xs: 55, md: 70 },
                  borderRadius: "50%",
                  border: "2px solid #3b82f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: "18px", md: "22px" },
                  color: "#5b3a29",
                  background: "#fff",
                }}
              >
                {step.id}
              </Box>

              {/* TITLE */}
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#1e5fa3",
                  mb: 1,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                }}
              >
                {step.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  color: "#6b7280",
                  maxWidth: 220,
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                {step.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* OPTIONAL BOTTOM DESIGN */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 100,
            background:
              "radial-gradient(circle at 10% 50%, rgba(30,95,163,0.08) 20%, transparent 20%)",
            opacity: 0.4,
          }}
        />
      </Box>
    </Box>
  );
}