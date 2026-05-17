import { Card, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import cardBg from "../../assets/images/serviceCardBg.jpeg"

export default function ServiceBox({ item }) {
  const navigate = useNavigate();

  // console.log(item)
  const handleClick = () => {
  navigate(`/enquiry/${item.id}`);
};

  return (
<Card
  sx={{
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 3,
    border: "1px solid #f1f5f9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    position: "relative",
  
    transition: "all 0.25s ease",
    cursor: "pointer",
    overflow: "hidden",

    backgroundImage: `url(${cardBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",



    "&:hover": {
      transform: "translateY(-4px)",
      border: "1px solid #b2add0",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },

    "&:active": {
      transform: "translateY(-2px) scale(0.98)",
    }
  }}
>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
{/* Icon */}
<Box
  component="img"
  src={item.icon}
  alt={item.title}
  sx={{
    width: 50,
    height: 50,
    objectFit: "contain",
    mb: 2,
  }}
/>

        {/* Number */}
        <Typography
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            fontSize: "40px",
            color: "#eee",
            fontWeight: 700
          }}
        >
          {item.id}
        </Typography>

     {/* Title */}
<Typography
  variant="h6"
  sx={{
    fontWeight: 600,
    lineHeight: 1.4,
    pr: 6,
    // mb: 1.5,

    whiteSpace: "nowrap",      // ✅ single line
    overflow: "hidden",
    textOverflow: "ellipsis",  // ✅ show ...
  }}
>
  {item.title}
</Typography>

        {/* Description (FIXED HEIGHT) */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "#6b7280",
            minHeight: "60px", 
            py:2
          }}
        >
          {item.desc}
        </Typography>

        {/* Learn More */}
        <Typography
        onClick={()=>navigate(`${item.path}`)}
          // onClick={handleClick}

          sx={{
            color: "#c89b3c",
            fontWeight: 600,
            mt: "auto", // ✅ always push to bottom
            cursor: "pointer"
          }}
          
        >
          Enquiry Now →
        </Typography>
      </CardContent>
    </Card>
  );
}