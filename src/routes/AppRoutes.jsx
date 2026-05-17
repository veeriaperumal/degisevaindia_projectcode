// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
// import Home from "../pages/HomePage/Home";
import ServicePage from "../components/service/servicePage";
import HeroSection from "../pages/HomePage/Hero";
import Business from "../pages/BusinessSetup/Business";
import ScrollToTop from "../components/common/ScrolltoTop";
// import EnquiryPage from "../pages/EnquiryPage";
import Financial from "../pages/Financial Services/Financial";
import GovernmentTender from "../pages/Tenders/GovernmentTender";
import GlobalEdu from "../pages/Global Education/GlobalEdu";
import Fssai from "../pages/Food License/Fssai";
import GovernmentService from "../pages/Government Service/GovernmentService";
import IsoCertification from "../pages/ISO/IsoCertification";
import PropertyService from "../pages/Property Service/PropertyService";
import WebDevelopment from "../pages/Web Development/WebDevelopment";
import ScrollToTopOrRestore from "../components/common/ScrollTopOrRestore";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    {/* <ScrollToTopOrRestore/> */}
    <ScrollToTop/>
      <Routes>

        {/* Layout wrapper */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<HeroSection />} />
       
{/* <Route path="/service/:id" element={<ServicePage />} /> */}
<Route path="/business" element={<Business/>}/>
<Route path="/financial" element={<Financial/>}/>
<Route path="/tenders" element={<GovernmentTender/>}/>

<Route path="/globalEducation" element={<GlobalEdu/>}/>
<Route path="/fssai" element={<Fssai/>}/>
<Route path="/iso" element={<IsoCertification/>}/>
<Route path="/government-services" element={<GovernmentService/>}/>
<Route path="/property-services" element={<PropertyService/>}/>
<Route path="/web-development" element={<WebDevelopment/>}/>







{/* <Route path="enquiry/:serviceId" element={<EnquiryPage />} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}