import {
  Box,
  Typography,
  TextField,
  Button,
  Paper
} from "@mui/material";
import EnquiryForm from "../../components/form/EnquiryForm";
import FinancialIcon from "../../assets/icons/financialService.png"
import FormLeftContent from "../../components/form/FormLeftContent";
import FinancialBg from "../../assets/images/FinancialBg.png"



export default function Financial() {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 5 },
             p: { xs: 3, md: 6 },
            borderRadius: 4,
            // boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            boxShadow:3,

            overflow: "hidden",
            background: "linear-gradient(180deg, #f9fafb, #fce7f3)",
          }}
        >

          <FormLeftContent
            serviceIcon={FinancialIcon}
            serviceName={"Financial Services"}
            serviceContent={"Business loans, CMA data preparation, and project report support for business growth and funding requirements."}
          />

          <EnquiryForm
            serviceName="Financial Services"
            isFinance={true}
            sheetUrl="https://script.google.com/macros/s/AKfycbxzRRReHCUVBKrBxHvh7CqoMV7z74hGH6Dsy1eVG95zs-nYQFQ3Kix57JsdmsiVTRxQig/exec"
          />

        </Box>
      </Box>
    </Box>
    //  <Box sx={{  py: 8, px: 2 }}>
    //     <Box sx={{ maxWidth: "1200px", mx: "auto" }}>

    //       {/* MAIN CONTAINER */}
    //       <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: { xs: "column", md: "row" },
    //           gap: 5,
    //           p: { xs: 3, md: 6 },
    //           borderRadius: 6,
    //           boxShadow: 3,
    //           //  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",

    //           // ✅ Background image + gradient overlay
    //           background: `

    //             url(${FinancialBg})
    //           `,
    //           backgroundSize: "fit-height",
    //           backgroundPosition: "center",
    //           backgroundRepeat: "no-repeat",
    //         }}
    //       >

    //         {/* LEFT CONTENT */}
    //         <FormLeftContent
    //           serviceIcon={FinancialIcon}
    //           serviceName={"Financial Services"}
    //         />

    //         {/* RIGHT FORM */}
    //         <EnquiryForm 
    //           serviceName="Financial Services"
    //           sheetUrl="https://script.google.com/macros/s/AKfycbxzRRReHCUVBKrBxHvh7CqoMV7z74hGH6Dsy1eVG95zs-nYQFQ3Kix57JsdmsiVTRxQig/exec"
    //         />

    //       </Box>
    //     </Box>
    //   </Box>
  );
}