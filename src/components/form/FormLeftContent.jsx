import {
  Box,
  Typography,
  Paper,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";
import SecureIcon from "../../assets/icons/secureIcon.png"
import fastProcessingIcon from "../../assets/icons/fastProcessingIcon.png"
import nationWideIcon from "../../assets/icons/nationWideIcon.png"
import ExpertsIcon from "../../assets/icons/professionalExpIcon.png"

export default function FormLeftContent({serviceIcon,serviceName,serviceContent}) {
  return (
    <Box sx={{ flex: 1 }}>
      
      {/* ICON */}
<Box
  component="img"
  src={serviceIcon}
  alt={serviceName}
  sx={{
    width: { xs: 45, md: 60 },  // control size
    height: "auto",
    objectFit: "contain",
    mb: 2,
  }}
/>
      {/* TITLE */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "1.8rem",
            sm: "2.2rem",
            md: "2.4rem"
          },
          lineHeight: 1.2
        }}
      >
        {serviceName || ""}
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          mt: 2,
          color: "#6b7280",
          maxWidth: 500,
          fontSize: {
            xs: "0.9rem",
            md: "1rem"
          }
        }}
      >
        {serviceContent || ""}
        {/* Study abroad admissions, visa assistance, and complete passport
        support for aspiring students across India. */}
      </Typography>

<Paper
  elevation={0}
  sx={{
    mt: 4,
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 2, md: 3 },
    borderRadius: 4,

    display: "grid",
    gridTemplateColumns: {
      xs: "1fr 1fr",     // mobile → 2x2
      sm: "repeat(2,1fr)", // tablet → 2x2 (fix)
      md: "repeat(4,1fr)"  // desktop → 1 row
    },

    gap: { xs: 2, md: 0 },
    textAlign: "center",

    background: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  }}
>
  {[
    ["25K+", "Happy Clients"],
    ["500+", "Services"],
    ["4.8", "Rating"],
    ["5yr", "Of Excellence"],
  ].map((item, i) => (
    <Box
      key={i}
      sx={{
        position: "relative",
        py: { xs: 1, md: 0 },
      }}
    >
      {/* VALUE */}
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
      >
        {item[0] === "25K+" && (
          <>
            25
            <Box component="span" sx={{ color: "#f59e0b" }}>
              K+
            </Box>
          </>
        )}

        {item[0] === "500+" && (
          <>
            500
            <Box component="span" sx={{ color: "#f59e0b" }}>
              +
            </Box>
          </>
        )}

        {item[0] === "4.8" && (
          <>
            4.8{" "}
            <Box component="span" sx={{ color: "#f59e0b" }}>
              ★
            </Box>
          </>
        )}

        {item[0] === "5yr" && (
          <>
            5
            <Box component="span" sx={{ color: "#f59e0b" }}>
              yr
            </Box>
          </>
        )}
      </Typography>

      {/* LABEL */}
      <Typography
        sx={{
          color: "#6b7280",
          fontSize: { xs: "0.7rem", md: "0.85rem" },
        }}
      >
        {item[1]}
      </Typography>

      {/* DIVIDER (ONLY DESKTOP) */}
      {i !== 3 && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            height: "40%",
            width: "1px",
            background: "#e5e7eb",
            display: { xs: "none", md: "block" }, // 🔥 fix
          }}
        />
      )}
    </Box>
  ))}
</Paper>

<Box
  sx={{
    mt: 4,
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr"
    },
    gap: 2
  }}
>
  {[
    ["Nation-wide Reach", nationWideIcon],
    ["Professional Experts",ExpertsIcon],
    ["Secure & Certified", SecureIcon],
    ["Fast Processing", fastProcessingIcon]
  ].map((item, i) => (
    <Paper
      key={i}
      sx={{
        p: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
        }
      }}
    >
      {/* IMAGE BOX */}
      <Box
        sx={{
          width: { xs: 40, md: 55 },
          height: { xs: 40, md: 55 },
          borderRadius: 2,
          // bgcolor: "#e0f2fe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src={item[1]}
          alt={item[0]}
          sx={{
            width: "70%",
            height: "70%",
            objectFit: "contain"
          }}
        />
      </Box>

      {/* TEXT */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: "0.9rem",
            md: "1rem"
          }
        }}
      >
        {item[0]}
      </Typography>
    </Paper>
  ))}
</Box>
    </Box>
  );
}