import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from "@mui/material";
import EnquiryForm from "../../components/form/EnquiryForm";
import FormLeftContent from "../../components/form/FormLeftContent";
import GlobalIcon from "../../assets/icons/globalEduIcon.png"

export default function GlobalEdu() {
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
            background: "linear-gradient(180deg,#f9fafb,#dbeafe)",
          }}
        >
          
          <FormLeftContent serviceIcon={GlobalIcon} serviceName={"Global Education"} serviceContent={"Study abroad admissions, visa assistance, and complete passport support for aspiring students across India."}/>

        <EnquiryForm 
          serviceName="Global Education"
          isGlobal={true}
          sheetUrl="https://script.google.com/macros/s/AKfycbyoAukLg23UONl2ZpehNwjL9DnPF-KrgOCrqhaw4M0Bc7w9nf7ux8V-adIe8JKI7-pb/exec"
        />
          </Box>
    
      </Box>
    </Box>
  );
}