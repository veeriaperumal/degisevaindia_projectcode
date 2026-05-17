import GlobalIcon from "../assets/icons/globalEduIcon.png"
import businessIcon from "../assets/icons/businessSetup.png"
import financialIcon from "../assets/icons/financialService.png"
import tenderIcon from "../assets/icons/tenders.png"
import fssaiIcon from "../assets/icons/fssaiIcon.png"
import isoIcon from "../assets/icons/isoIcon.png"
import governmentIcon from "../assets/icons/governmentIcon.png"
import propertyIcon from "../assets/icons/propertyIcon.png"
import webIcon from "../assets/icons/webIcon.png"




export const SERVICES = [
  {
    id: "01",
    title: "Global Education",
    path: "/globalEducation",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbyoAukLg23UONl2ZpehNwjL9DnPF-KrgOCrqhaw4M0Bc7w9nf7ux8V-adIe8JKI7-pb/exec",
    icon: GlobalIcon,
    desc: "Study abroad admissions, visa assistance, and complete passport support for aspiring students across India.",
    bg: "#e3f2fd",
    points: [
      "Study abroad guidance",
      "University admission support",
      "Visa assistance",
      "Scholarship help",
    ],
  },

  {
    id: "02",
    title: "Business Setup",
    path: "/business",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbyGcnX27Wul_8O30wg45iEygv5Hh1MrtbZfMqfLZb6v1HawdDvx2e5dnNdAbjReMB7H/exec",
    icon:businessIcon,
    desc: "Company registration, GST filing, Udyam registration, and compliance support for startups and growing businesses.",
    bg: "#fff3e0",
    points: [
      "Pvt Ltd / LLP Registration",
      "GST Filing",
      "Udyam Registration",
      "Compliance support",
    ],
  },

  {
    id: "03",
    title: "Financial Services",
    path: "/financial",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbxzRRReHCUVBKrBxHvh7CqoMV7z74hGH6Dsy1eVG95zs-nYQFQ3Kix57JsdmsiVTRxQig/exec",
    icon: financialIcon,
    desc: "Business loans, CMA data preparation, and project report support for business growth and funding requirements.",
    bg: "#fce4ec",
    points: [
      "MSME Business Loans",
      "Mudra Scheme Assistance",
      "CMA Data Preparation",
      "Project Report Support",
    ],
  },

  {
    id: "04",
    title: "Tender Services",
    path: "/tenders",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec",
    icon: tenderIcon,
    desc: "End-to-end tender search, bid preparation support, GeM portal registration and management.",
    bg: "#e8f5e9",
    points: [
      "Tender Search & Selection",
      "Bid Preparation Support",
      "GeM Portal Registration",
      "Management Services",
    ],
  },

  {
    id: "05",
    title: "FSSAI & Food Licensing",
    path: "/fssai",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec",
    icon: fssaiIcon,
    desc: "FSSAI registration, food safety documentation, and approval support for food businesses of all sizes.",
    bg: "#fff8e1",
    points: [
      "FSSAI Registration",
      "Food License Support",
      "Food Safety Documentation",
      "Approval Assistance",
    ],
  },

  {
    id: "06",
    title: "ISO Certification",
    path: "/iso",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec",
    icon: isoIcon,
    desc: "Complete support for major ISO certifications to improve business quality, compliance, and credibility.",
    bg: "#ede7f6",
    points: [
      "ISO 9001 Certification",
      "ISO 22000 Support",
      "ISO 27001 Certification",
      "Documentation Assistance",
    ],
  },

  {
    id: "07",
    title: "Government Services",
    path: "/government-services",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec",
    icon: governmentIcon,
    desc: "Easy assistance for Aadhaar, PAN, Voter ID, Driving License, and other essential public services.",
    bg: "#e1f5fe",
    points: [
      "Aadhaar Services",
      "PAN Card Support",
      "Driving License Assistance",
      "Voter ID & Ration Card",
    ],
  },

  {
    id: "08",
    title: "Property Services",
    path: "/property-services",
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbx9Np_B5mjcR2ijWw-k0MEwlZuzx0lwTd1MjCAcIyT7TslCjBe3ISbz8Cw4H5v9sZqegQ/exec",
    icon: propertyIcon,
    desc: "Find commercial properties, lands, flats, apartments, and industrial properties with trusted guidance and support.",
    bg: "#f3e5f5",
    points: [
      "Bank Auction Houses",
      "Commercial Properties",
      "Land / Plots",
      "Flat / Apartments",
      "Industrial Properties",
    ],
  },

  {
  id: "09",
  title: "Web Development",
  path: "/web-development",
  sheetUrl:
    "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
  icon: webIcon,
  desc: "Modern website development, business websites, portfolio sites, and complete digital solutions for startups.",
  bg: "#e0f2fe",
  points: [
    "Business Website Development",
    "Portfolio Websites",
    "Responsive UI Design",
    "E-Commerce Solutions",
  ],
}
];