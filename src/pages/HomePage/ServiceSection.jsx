
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

import leftArrow from "../../assets/icons/leftArrowIcon.png";
import rightArrow from "../../assets/icons/rightArrowIcon.png";
import ServiceBox from "../../components/service/ServiceBox";
import { SERVICES } from "../../data/servicesData";

export default function ServicesSection() {
  const swiperRef = useRef(null);

  return (
    <Box sx={{ py: 5, px: { xs: 2, md: 6 }, backgroundColor: "#fff" }}>

  <Box sx={{ textAlign: "center", mb: 5 }} data-aos="fade-up">
        {/* Heading */}
        <Typography sx={{
          fontWeight: 700,
          fontSize: {
            xs: "1.5rem",
            sm: "1.8rem",
            md: "2.2rem",
          }, textAlign: "center", mb: 2
        }}>
          Everything Your Business{" "}
          <Box component="span" sx={{ color: "#c89b3c", fontStyle: "italic" }}>
            Needs
          </Box>
        </Typography>
        <Typography sx={{ color: "#c89b3c", fontSize: { xs: "0.8rem", md: "0.9rem" }, mb: 3, textAlign: "center" }}>
          WHAT WE OFFER
        </Typography>


      </Box>
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        autoHeight={false}
        style={{ paddingBottom: "4px",paddingTop:"4px" }}

  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
 speed={800}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {SERVICES.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              height: "auto",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box sx={{ height: "100%", width: "100%", display: "flex" }} data-aos="fade-up" >
              <ServiceBox item={item} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAV BUTTONS BELOW */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: 4,
        }}
      >
        <Button
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            minWidth: "unset",
            p: 0,
          }}
        >
          <img src={leftArrow} alt="prev" width={45} />
        </Button>

        <Button
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            minWidth: "unset",
            p: 0,
          }}
        >
          <img src={rightArrow} alt="next" width={45} />
        </Button>
      </Box>
    </Box>

  );
}