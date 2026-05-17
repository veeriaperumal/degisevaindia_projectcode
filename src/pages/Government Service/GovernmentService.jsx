import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from "@mui/material";
import EnquiryForm from "../../components/form/EnquiryForm";
import TenderIcon from "../../assets/icons/tenders.png"
import FormLeftContent from "../../components/form/FormLeftContent";
import governmentIcon from "../../assets/icons/governmentIcon.png"

export default function GovernmentService() {
  return (
    <Box sx={{ bgcolor: "#eef1f5", py: 8, px: 2 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        
        {/* MAIN CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
            p: { xs: 3, md: 6 },
            borderRadius: 6,
            boxShadow:3,
            // background: "linear-gradient(180deg,#f9fafb,#dbeafe)",
            // background: "linear-gradient(180deg, #faf5ff, #f5d0fe)",
            background: "linear-gradient(180deg, #ede9fe, #c4b5fd)",
          }}
        >
          
          <FormLeftContent serviceIcon={governmentIcon} serviceName={"Government Services"} serviceContent={"Easy assistance for Aadhaar, PAN, Voter ID, Driving License, and other essential public services."}/>

        <EnquiryForm 
          serviceName="Government Services"
          isGovernment={true}
          sheetUrl="https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec"
        />
          </Box>
        
      </Box>
    </Box>
  );
}