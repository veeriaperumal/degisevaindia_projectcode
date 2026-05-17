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
import IsoIcon from "../../assets/icons/isoIcon.png"

export default function IsoCertification() {
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
background: "linear-gradient(180deg, #ffffff, #fbb2b2)",
          }}
        >
          
          <FormLeftContent serviceIcon={IsoIcon} serviceName={"ISO Certification"} serviceContent={"Complete support for major ISO certifications to improve business quality, compliance, and credibility."}/>

        <EnquiryForm 
          serviceName="ISO Certification"
          isISO={true}
          sheetUrl="https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec"
        />
          </Box>
        
      </Box>
    </Box>
  );
}