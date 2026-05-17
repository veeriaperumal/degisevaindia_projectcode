import { Box, TextField, Button, Typography,Paper, MenuItem } from "@mui/material";
import { useState } from "react";
import { submitToSheet } from "../../utils/submitToSheet";
import toast from "react-hot-toast";
import ReactCountryFlag from "react-country-flag";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import Select from "react-select";


// export default function EnquiryForm({ serviceName, sheetUrl }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});

//   // ✅ VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!form.phone) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       newErrors.phone = "Enter valid 10-digit number";
//     }

//     if (!form.email) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!form.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (form.message.length < 10) {
//       newErrors.message = "Message should be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   // ✅ SUBMIT
//   const handleSubmit = async () => {
//     if (!validate()) return;

//     setLoading(true);

//     try {
//       await submitToSheet({
//         ...form,
//         service: serviceName || "General Enquiry",
//       }, sheetUrl);

//       setSubmitted(true);
//       setForm({
//         name: "",
//         phone: "",
//         email: "",
//         message: "",
//       });
//       setTimeout(() => setSubmitted(false), 5000);
//     } catch (error) {
//       console.error("Error!", error.message);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//      <Paper
//       elevation={4}
//       sx={{
//         width: "100%",
//         maxWidth: 380,
//         p: 3,
//         borderRadius: 4,
//         background: "#f9fafb"
//       }}
//     >
//       <Typography fontWeight={700} fontSize={20} mb={2}>
//         Register Now
//       </Typography>

//       {/* NAME */}
//       <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//         Name <span style={{ color: "red" }}>*</span>
//       </Typography>
//       <TextField
//         fullWidth
//         placeholder="Enter your name"
//         value={form.name}
//         error={!!errors.name}
//         helperText={errors.name}
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={(e) =>
//           setForm({ ...form, name: e.target.value })
//         }
//       />

//       {/* PHONE */}
//       <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//         Mobile number <span style={{ color: "red" }}>*</span>
//       </Typography>
//       <TextField
//         fullWidth
//         placeholder="Enter your mobile number"
//         value={form.phone}
//         error={!!errors.phone}
//         helperText={errors.phone}
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={(e) =>
//           setForm({ ...form, phone: e.target.value })
//         }
//       />

//       {/* EMAIL */}
//       <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//         E-mail <span style={{ color: "red" }}>*</span>
//       </Typography>
//       <TextField
//         fullWidth
//         placeholder="Enter your email address"
//         value={form.email}
//         error={!!errors.email}
//         helperText={errors.email}
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//       />

//       {/* MESSAGE */}
//       <Typography sx={{ fontSize: 14, mb: 0.5 }}>
//         Your Message
//       </Typography>
//       <TextField
//         fullWidth
//         placeholder="Enter your message"
//         multiline
//         rows={3}
//         value={form.message}
//         error={!!errors.message}
//         helperText={errors.message}
//         size="small"
//         sx={{ mb: 2 }}
//         onChange={(e) =>
//           setForm({ ...form, message: e.target.value })
//         }
//       />

//       {/* TERMS */}
//       <Typography sx={{ fontSize: 12, color: "#777", mb: 2 }}>
//         ○ I agree with the Terms and Conditions
//       </Typography>

//       {/* BUTTON */}
//       <Button
//         variant="contained"
//         fullWidth
//         onClick={handleSubmit}
//         disabled={loading}
//         sx={{
//           py: 1.2,
//           borderRadius: 2,
//           textTransform: "none",
//           fontWeight: 600,
//           background: "linear-gradient(90deg,#1d8cf8,#0d6efd)"
//         }}
//       >
//         {loading ? "Sending..." : "Apply Now"}
//       </Button>

//       {/* SUCCESS */}
//       {submitted && (
//         <Typography
//           sx={{
//             mt: 2,
//             textAlign: "center",
//             color: "green",
//             fontWeight: 600
//           }}
//         >
//           ✓ Submitted Successfully!
//         </Typography>
//       )}
//     </Paper>
//     // <Box sx={{ maxWidth: 420 }}>
//     //   <Typography fontWeight={600} mb={2}>
//     //     Enquiry Form
//     //   </Typography>

//     //   <TextField
//     //     fullWidth
//     //     label="Name"
//     //     value={form.name}
//     //     error={!!errors.name}
//     //     helperText={errors.name}
//     //     sx={{ mb: 2 }}
//     //     onChange={(e) =>
//     //       setForm({ ...form, name: e.target.value })
//     //     }
//     //   />

//     //   <TextField
//     //     fullWidth
//     //     label="Phone"
//     //     value={form.phone}
//     //     error={!!errors.phone}
//     //     helperText={errors.phone}
//     //     sx={{ mb: 2 }}
//     //     onChange={(e) =>
//     //       setForm({ ...form, phone: e.target.value })
//     //     }
//     //   />

//     //   <TextField
//     //     fullWidth
//     //     label="Email"
//     //     value={form.email}
//     //     error={!!errors.email}
//     //     helperText={errors.email}
//     //     sx={{ mb: 2 }}
//     //     onChange={(e) =>
//     //       setForm({ ...form, email: e.target.value })
//     //     }
//     //   />

//     //   <TextField
//     //     fullWidth
//     //     label="Message"
//     //     multiline
//     //     rows={4}
//     //     value={form.message}
//     //     error={!!errors.message}
//     //     helperText={errors.message}
//     //     sx={{ mb: 2 }}
//     //     onChange={(e) =>
//     //       setForm({ ...form, message: e.target.value })
//     //     }
//     //   />

//     //   <Button 
//     //     variant="contained" 
//     //     fullWidth 
//     //     onClick={handleSubmit}
//     //     disabled={loading}
//     //   >
//     //     {loading ? "Sending..." : "Submit"}
//     //   </Button>

//     //   {submitted && (
//     //     <Typography color="success.main" sx={{ mt: 2, textAlign: "center", fontWeight: 600 }}>
//     //       ✓ Submitted Successfully!
//     //     </Typography>
//     //   )}
//     // </Box>
//   );
// }



const getInitialForm = () => ({
  name: "",
  phone: "",
  email: "",
  message: "",

  // Global
  preferredCountry: "",
  qualification: "",
  passportStatus: "",

  // Business
  businessName: "",
  businessType: "",
  serviceRequired: "",

  // Tender
  companyName: "",
  gemRegistration: "",

  // Finance
  financialService: "",
  loanAmount: "",
  businessLocation: "",

  // Food
  licenseType: "",
  existingLicense: "",

  // ISO
  industryType: "",
  isoType: "",
  employees: "",

  // Passport
  passportService: "",
  city: "",
  passportAvailable: "",

  // Government
  govService: "",
  applicationType: "",

  propertyType: "",

  webService: ""
});

const countryList = Object.entries(
  countries.getNames("en", { select: "official" })
).map(([code, name]) => ({
  code,
  name,
}));

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: 40,

    borderColor: state.isFocused
      ? "#1976d2"
      : "#d1d5db",
    boxShadow: "none",
    background: "transparent",

    "&:hover": {
      borderColor: "#1976d2",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    background: "transparent",
  }),

  singleValue: (base) => ({
    ...base,
    background: "transparent",
  }),

  input: (base) => ({
    ...base,
    background: "transparent",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
    fontSize: 14,
  }),

  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  error,
}) => (
  <Box style={{ marginBottom: 16 }}>
    <Select
      options={options}
      placeholder={placeholder}
      styles={selectStyles}
      value={
        options.find(
          (o) => o.value === value
        ) || null
      }
      onChange={(selected) =>
        onChange(selected?.value || "")
      }
    />

    {error && (
      <Typography
        sx={{
          color: "#d32f2f",
          fontSize: 12,
          mt: 0.5,
          ml: 1,
        }}
      >
        {error}
      </Typography>
    )}
  </Box>
);
const Label = ({
  text,
  required = true,
}) => (
  <Typography
    sx={{
      fontSize: 14,
      mb: 0.5,
      fontWeight: 500,
    }}
  >
    {text}

    {required && (
      <span style={{ color: "red" }}>
        {" "}
        *
      </span>
    )}
  </Typography>
);


export default function EnquiryForm({
  serviceName,
  sheetUrl,
  isGlobal,
  isBusiness,
  isTender,
  isFinance,
  isFood,
  isISO,
  isPassport,
  isGovernment,
  isProperty,
  isWeb
}) {
  const [form, setForm] = useState(getInitialForm());

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);



const countryOptions = [
  {
    value: "Canada",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ReactCountryFlag
          countryCode="CA"
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
          }}
        />
        Canada
      </div>
    ),
  },

  {
    value: "United Kingdom",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
          }}
        />
        United Kingdom
      </div>
    ),
  },

  {
    value: "United States",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
          }}
        />
        United States
      </div>
    ),
  },

  {
    value: "Australia",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <ReactCountryFlag
          countryCode="AU"
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
          }}
        />
        Australia
      </div>
    ),
  },
];
  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    // GLOBAL
    if (isGlobal) {
      if (!form.preferredCountry) {
        newErrors.preferredCountry =
          "Preferred country required";
      }

      if (!form.qualification) {
        newErrors.qualification =
          "Qualification required";
      }

      if (!form.passportStatus) {
        newErrors.passportStatus =
          "Passport status required";
      }
    }

    // BUSINESS
    if (isBusiness) {
      if (!form.businessName) {
        newErrors.businessName =
          "Business name required";
      }

      if (!form.businessType) {
        newErrors.businessType =
          "Business type required";
      }

      if (!form.serviceRequired) {
        newErrors.serviceRequired =
          "Service required";
      }
    }

    // TENDER
    if (isTender) {
      if (!form.companyName) {
        newErrors.companyName =
          "Company name required";
      }

      if (!form.gemRegistration) {
        newErrors.gemRegistration =
          "Select GeM registration";
      }
    }

    // FINANCE
    if (isFinance) {
      if (!form.businessName) {
        newErrors.businessName =
          "Business name required";
      }

      if (!form.financialService) {
        newErrors.financialService =
          "Select financial service";
      }
    }

    // FOOD
    if (isFood) {
      if (!form.businessName) {
        newErrors.businessName =
          "Business name required";
      }

      if (!form.licenseType) {
        newErrors.licenseType =
          "Select license type";
      }

      if (!form.existingLicense) {
        newErrors.existingLicense =
          "Select existing license";
      }
    }

    // ISO
    if (isISO) {
      if (!form.companyName) {
        newErrors.companyName =
          "Company name required";
      }

      if (!form.industryType) {
        newErrors.industryType =
          "Industry type required";
      }

      if (!form.isoType) {
        newErrors.isoType =
          "Select ISO type";
      }
    }

    // PASSPORT
    if (isPassport) {
      if (!form.passportService) {
        newErrors.passportService =
          "Select passport service";
      }

      if (!form.city) {
        newErrors.city = "City required";
      }

      if (!form.passportAvailable) {
        newErrors.passportAvailable =
          "Select passport availability";
      }
    }

    // GOVERNMENT
    if (isGovernment) {
      if (!form.govService) {
        newErrors.govService =
          "Select government service";
      }

      if (!form.applicationType) {
        newErrors.applicationType =
          "Select application type";
      }

      if (!form.city) {
        newErrors.city = "City required";
      }
    }

    // PROPERTY
if (isProperty) {
  if (!form.propertyType) {
    newErrors.propertyType =
      "Select property type";
  }
}

// WEB DEVELOPMENT
if (isWeb) {
  if (!form.webService) {
    newErrors.webService = "Select web development service";
  }
}

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await submitToSheet(
        {
          ...form,
          service: serviceName,
        },
        sheetUrl
      );

      toast.success("Submitted Successfully");

      setForm(getInitialForm());
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  

  return (
 <Paper
      elevation={4}
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          md: 400,
        },
        p: {
          xs: 2,
          md: 3,
        },
        borderRadius: 4,
        background: "#f9fafb",
      }}
    >
      {/* NAME */}
      <Label text="Full Name" />

      <TextField
        fullWidth
        size="small"
        placeholder="Enter your full name"
        value={form.name}
        error={!!errors.name}
        helperText={errors.name}
        sx={{ mb: 2 }}
        onChange={(e) =>
          handleChange(
            "name",
            e.target.value
          )
        }
      />

      {/* PHONE */}
      <Label text="Phone Number" />

      <TextField
        fullWidth
        size="small"
        placeholder="Enter mobile number"
        value={form.phone}
        error={!!errors.phone}
        helperText={errors.phone}
        sx={{ mb: 2 }}
        onChange={(e) =>
          handleChange(
            "phone",
            e.target.value
          )
        }
      />

      {/* EMAIL */}
      <Label text="Email Address" />

      <TextField
        fullWidth
        size="small"
        placeholder="Enter email address"
        value={form.email}
        error={!!errors.email}
        helperText={errors.email}
        sx={{ mb: 2 }}
        onChange={(e) =>
          handleChange(
            "email",
            e.target.value
          )
        }
      />

      {/* GLOBAL */}
      {isGlobal && (
        <>
          <Label text="Preferred Country" />

          <CustomSelect
            placeholder="Select Preferred Country"
            value={form.preferredCountry}
            error={errors.preferredCountry}
            onChange={(value) =>
              handleChange(
                "preferredCountry",
                value
              )
            }
            options={countryOptions}
          />

          <Label text="Highest Qualification" />

          <TextField
            fullWidth
            size="small"
            placeholder="Enter highest qualification"
            value={form.qualification}
            error={
              !!errors.qualification
            }
            helperText={
              errors.qualification
            }
            sx={{ mb: 2 }}
            onChange={(e) =>
              handleChange(
                "qualification",
                e.target.value
              )
            }
          />

          <Label text="Passport Status" />

          <CustomSelect
            placeholder="Select Passport Status"
            value={form.passportStatus}
            error={
              errors.passportStatus
            }
            onChange={(value) =>
              handleChange(
                "passportStatus",
                value
              )
            }
            options={[
              {
                value: "Yes",
                label: "Yes",
              },
              {
                value: "No",
                label: "No",
              },
              {
                value: "Applied",
                label: "Applied",
              },
            ]}
          />
        </>
      )}

      {/* BUSINESS */}
      {isBusiness && (
        <>
          <Label text="Business Name" />

          <TextField
            fullWidth
            size="small"
            placeholder="Enter business name"
            value={form.businessName}
            error={
              !!errors.businessName
            }
            helperText={
              errors.businessName
            }
            sx={{ mb: 2 }}
            onChange={(e) =>
              handleChange(
                "businessName",
                e.target.value
              )
            }
          />

          <Label text="Business Type" />

          <CustomSelect
            placeholder="Select Business Type"
            value={form.businessType}
            error={
              errors.businessType
            }
            onChange={(value) =>
              handleChange(
                "businessType",
                value
              )
            }
            options={[
              {
                value: "Pvt Ltd",
                label: "Pvt Ltd",
              },
              {
                value: "LLP",
                label: "LLP",
              },
              {
                value: "OPC",
                label: "OPC",
              },
              {
                value:
                  "Proprietorship",
                label:
                  "Proprietorship",
              },
            ]}
          />
   <Label text="Service Required" />

    <CustomSelect
      placeholder="Select Service"
      value={form.serviceRequired}
      error={errors.serviceRequired}
      onChange={(value) =>
        handleChange(
          "serviceRequired",
          value
        )
      }
      options={[
        {
          value: "Company Registration",
          label:
            "Company Registration",
        },
        {
          value: "GST",
          label: "GST",
        },
        {
          value: "Udyam",
          label: "Udyam",
        },
        {
          value: "Compliance",
          label: "Compliance",
        },
      ]}
    />
  

        </>
      )}

      {/* GOVERNMENT */}
      {isGovernment && (
        <>
          <Label text="Service Required" />

          <CustomSelect
            placeholder="Select Service"
            value={form.govService}
            error={errors.govService}
            onChange={(value) =>
              handleChange(
                "govService",
                value
              )
            }
            options={[
              {
                value: "Aadhaar",
                label: "Aadhaar",
              },
              {
                value: "PAN",
                label: "PAN",
              },
              {
                value: "Voter ID",
                label: "Voter ID",
              },
              {
                value:
                  "Driving License",
                label:
                  "Driving License",
              },
              {
                value: "Passport",
                label: "Passport",
              },
            ]}
          />

          <Label text="Application Type" />

          <CustomSelect
            placeholder="Select Application Type"
            value={form.applicationType}
            error={
              errors.applicationType
            }
            onChange={(value) =>
              handleChange(
                "applicationType",
                value
              )
            }
            options={[
              {
                value: "New",
                label: "New",
              },
              {
                value: "Renewal",
                label: "Renewal",
              },
              {
                value: "Update",
                label: "Update",
              },
              {
                value: "Correction",
                label: "Correction",
              },
            ]}
          />

          <Label text="City" />

          <TextField
            fullWidth
            size="small"
            placeholder="Enter city"
            value={form.city}
            error={!!errors.city}
            helperText={errors.city}
            sx={{ mb: 2 }}
            onChange={(e) =>
              handleChange(
                "city",
                e.target.value
              )
            }
          />
        </>
      )}

      {/* FINANCIAL SERVICES */}
{isFinance && (
  <>
    <Label text="Business Name" />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter business name"
      value={form.businessName}
      error={!!errors.businessName}
      helperText={errors.businessName}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "businessName",
          e.target.value
        )
      }
    />

    <Label text="Financial Service Required" />

    <CustomSelect
      placeholder="Select Financial Service"
      value={form.financialService}
      error={errors.financialService}
      onChange={(value) =>
        handleChange(
          "financialService",
          value
        )
      }
      options={[
        {
          value: "Business Loan",
          label: "Business Loan",
        },
        {
          value: "CMA Data",
          label: "CMA Data",
        },
        {
          value: "Project Report",
          label: "Project Report",
        },
      ]}
    />

    <Label
      text="Loan Amount Required"
      required={false}
    />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter required loan amount"
      value={form.loanAmount}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "loanAmount",
          e.target.value
        )
      }
    />

    <Label
      text="Business Location"
      required={false}
    />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter business location"
      value={form.businessLocation}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "businessLocation",
          e.target.value
        )
      }
    />
  </>
)}

{/* TENDER */}
{isTender && (
  <>
    <Label text="Company Name" />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter company name"
      value={form.companyName}
      error={!!errors.companyName}
      helperText={errors.companyName}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "companyName",
          e.target.value
        )
      }
    />

    <Label text="GeM Registration Available" />

    <CustomSelect
      placeholder="Select Option"
      value={form.gemRegistration}
      error={errors.gemRegistration}
      onChange={(value) =>
        handleChange(
          "gemRegistration",
          value
        )
      }
      options={[
        {
          value: "Yes",
          label: "Yes",
        },
        {
          value: "No",
          label: "No",
        },
      ]}
    />
  </>
)}

{/* FOOD / FSSAI */}
{isFood && (
  <>
    <Label text="Business Name" />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter business name"
      value={form.businessName}
      error={!!errors.businessName}
      helperText={errors.businessName}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "businessName",
          e.target.value
        )
      }
    />

    <Label text="License Type" />

    <CustomSelect
      placeholder="Select License Type"
      value={form.licenseType}
      error={errors.licenseType}
      onChange={(value) =>
        handleChange(
          "licenseType",
          value
        )
      }
      options={[
        {
          value: "Basic",
          label: "Basic",
        },
        {
          value: "State",
          label: "State",
        },
        {
          value: "Central",
          label: "Central",
        },
      ]}
    />

    <Label text="Existing License" />

    <CustomSelect
      placeholder="Select Option"
      value={form.existingLicense}
      error={errors.existingLicense}
      onChange={(value) =>
        handleChange(
          "existingLicense",
          value
        )
      }
      options={[
        {
          value: "Yes",
          label: "Yes",
        },
        {
          value: "No",
          label: "No",
        },
      ]}
    />
  </>
)}

{/* ISO */}
{isISO && (
  <>
    <Label text="Company Name" />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter company name"
      value={form.companyName}
      error={!!errors.companyName}
      helperText={errors.companyName}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "companyName",
          e.target.value
        )
      }
    />

    <Label text="Industry Type" />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter industry type"
      value={form.industryType}
      error={!!errors.industryType}
      helperText={errors.industryType}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "industryType",
          e.target.value
        )
      }
    />

    <Label text="ISO Type" />

    <CustomSelect
      placeholder="Select ISO Type"
      value={form.isoType}
      error={errors.isoType}
      onChange={(value) =>
        handleChange(
          "isoType",
          value
        )
      }
      options={[
        {
          value: "9001",
          label: "ISO 9001",
        },
        {
          value: "22000",
          label: "ISO 22000",
        },
        {
          value: "27001",
          label: "ISO 27001",
        },
        {
          value: "Other",
          label: "Other",
        },
      ]}
    />

    <Label
      text="Number of Employees"
      required={false}
    />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter employee count"
      value={form.employees}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "employees",
          e.target.value
        )
      }
    />

    <Label
      text="Business Location"
      required={false}
    />

    <TextField
      fullWidth
      size="small"
      placeholder="Enter business location"
      value={form.businessLocation}
      sx={{ mb: 2 }}
      onChange={(e) =>
        handleChange(
          "businessLocation",
          e.target.value
        )
      }
    />
  </>
)}

      {/* PROPERTY */}
      {isProperty && (
        <>
          <Label text="Property Type" />

          <CustomSelect
            placeholder="Select Property Type"
            value={form.propertyType}
            error={
              errors.propertyType
            }
            onChange={(value) =>
              handleChange(
                "propertyType",
                value
              )
            }
            options={[
              {
                value: "Bank Auction Houses",
                label: "Bank Auction Houses",
              },
              {
                value: "Commercial Properties",
                label: "Commercial Properties",
              },
              {
                value: "Land / Plots",
                label: "Land / Plots",
              },
              {
                value: "Flat / Apartment",
                label: "Flat / Apartment",
              },
              {
                value: "Industrial Properties",
                label: "Industrial Properties",
              },
          
            ]}
          />
        </>
      )}

      {/* WEB DEVELOPMENT */}
{isWeb && (
  <>
    <Label text="Web Development Service" />

    <CustomSelect
      placeholder="Select Web Service"
      value={form.webService}
      error={errors.webService}
      onChange={(value) =>
        handleChange("webService", value)
      }
      options={[
        {
          value: "Static Website",
          label: "Static Website",
        },
        {
          value: "Dynamic Website",
          label: "Dynamic Website",
        },
        {
          value: "E-Commerce Website",
          label: "E-Commerce Website",
        },
        {
          value: "Web App Development",
          label: "Web App Development",
        },
        {
          value: "UI/UX Design",
          label: "UI/UX Design",
        },
      ]}
    />
  </>
)}

      {/* MESSAGE */}
      <Label text="Message" />

      <TextField
        fullWidth
        multiline
        rows={3}
        size="small"
        placeholder="Enter your message"
        value={form.message}
        error={!!errors.message}
        helperText={errors.message}
        sx={{ mb: 2 }}
        onChange={(e) =>
          handleChange(
            "message",
            e.target.value
          )
        }
      />

      {/* BUTTON */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        disabled={loading}
        sx={{
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          background:
            "linear-gradient(90deg,#1d8cf8,#0d6efd)",
        }}
      >
        {loading
          ? "Sending..."
          : "Apply Now"}
      </Button>
    </Paper>
  );
}