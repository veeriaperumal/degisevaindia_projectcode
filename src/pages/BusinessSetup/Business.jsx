// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper
// } from "@mui/material";
// import EnquiryForm from "../../components/form/EnquiryForm";

// export default function Business() {
//   return (
//     <Box
//       sx={{
//         py: 10,
//         px: 2,
//         background: "#f3f4f6"
//       }}
//     >
//       {/* CENTER WRAPPER */}
//       <Box
//         sx={{
//           maxWidth: "1000px",
//           mx: "auto"
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: { xs: 3, md: 6 },
//             borderRadius: 5,
//             background: "#fff"
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               gap: 5
//             }}
//           >
//             {/* LEFT SIDE */}
//             <Box sx={{ flex: 1 }}>
//               <Typography
//                 variant="h4"
//                 sx={{ fontWeight: 700, mb: 2 }}
//               >
//                 Business Setup
//               </Typography>

//               <Typography sx={{ color: "#6b7280", mb: 3 }}>
//                 Fill out the form and our team will contact you shortly.
//               </Typography>

//               <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                 {[
//                   "Quick response within 24 hours",
//                   "Trusted by 25,000+ clients",
//                   "Affordable & transparent pricing",
//                   "End-to-end assistance"
//                 ].map((point, i) => (
//                   <Box key={i} sx={{ display: "flex", gap: 1.5 }}>
//                     <Box
//                       sx={{
//                         width: 8,
//                         height: 8,
//                         mt: "8px",
//                         borderRadius: "50%",
//                         backgroundColor: "#c89b3c"
//                       }}
//                     />
//                     <Typography>{point}</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             <EnquiryForm
//               serviceName="Business Setup"
//               sheetUrl="https://script.google.com/macros/s/AKfycbyGcnX27Wul_8O30wg45iEygv5Hh1MrtbZfMqfLZb6v1HawdDvx2e5dnNdAbjReMB7H/exec"
//             />
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   );
// }

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";
import StarIcon from "@mui/icons-material/Star";
import EnquiryForm from "../../components/form/EnquiryForm";
import FormLeftContent from "../../components/form/FormLeftContent";
import BusinessIcon from "../../assets/icons/businessSetup.png"

export default function GlobalEducation() {
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
            background: "linear-gradient(180deg, #f9fafb, #fef3c7)",
          }}
        >
          
          <FormLeftContent serviceIcon={BusinessIcon} serviceName={"Business SetUp"} serviceContent={"Company registration, GST filing, Udyam registration, and compliance support for startups and growing businesses."}/>


             <EnquiryForm
               serviceName="Business Setup"
               isBusiness={true}
               sheetUrl="https://script.google.com/macros/s/AKfycbyGcnX27Wul_8O30wg45iEygv5Hh1MrtbZfMqfLZb6v1HawdDvx2e5dnNdAbjReMB7H/exec"
             />
        </Box>
      </Box>
    </Box>
  );
}