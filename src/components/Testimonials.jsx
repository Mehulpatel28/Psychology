import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* 👉 BACKGROUND IMAGE IMPORT */
import testimonialsBg from "../assets/images/about-bg.png";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Psychologist",
    content:
      "Mindcure Counselling has elevated the way I deliver therapy. The assessments and evidence-based tools help me track progress with clarity and confidence.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Licensed Mental Health Counselor",
    content:
      "The platform bridges science and compassion beautifully. It supports both therapists and clients in meaningful, measurable ways.",
    avatar: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "School Psychologist",
    content:
      "From student wellbeing plans to emotional tracking, Mindcure Counselling has transformed how I support mental health in educational settings.",
    avatar: "ER",
  },
  {
    name: "Dr. James Wilson",
    role: "Consultant Psychiatrist",
    content:
      "Secure, intuitive, and clinically relevant. This is exactly what modern psychology practice needs in a digital world.",
    avatar: "JW",
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },

        /* ✅ BACKGROUND IMAGE */
        backgroundImage: `url(${testimonialsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        overflow: "hidden",
      }}
    >
      {/* ✅ SOFT OVERLAY FOR READABILITY */}
      {/* <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.95))",
          zIndex: 0,
        }}
      /> */}

      {/* Decorative blurred shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: 260,
          height: 260,
          background: "rgba(52, 152, 219, 0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: 300,
          height: 300,
          background: "rgba(46, 204, 113, 0.15)",
          borderRadius: "50%",
          filter: "blur(90px)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 650,
            mx: "auto",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#3498db",
              mb: 1,
            }}
          >
            Testimonials
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2,
              background:
                "linear-gradient(135deg, #1A3C79 0%, #2C5AA0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trusted by Psychology Professionals
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5f6c7b",
              lineHeight: 1.6,
            }}
          >
            Mental health experts across the globe rely on Mindcure Counselling to deliver
            compassionate, evidence-based psychological care.
          </Typography>
        </Box>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "40px" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.78)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.6)",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontStyle: "italic",
                        color: "#4a5568",
                        lineHeight: 1.7,
                        mb: 4,
                      }}
                    >
                      “{testimonial.content}”
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 52,
                          height: 52,
                          fontWeight: 700,
                          background:
                            "linear-gradient(135deg, #3498db, #2ecc71)",
                          color: "#fff",
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>

                      <Box>
                        <Typography fontSize="15px" fontWeight={700}>
                          {testimonial.name}
                        </Typography>
                        <Typography fontSize="13px" color="#6b7280">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
