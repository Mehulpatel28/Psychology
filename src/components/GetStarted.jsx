import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import abtImg from "../assets/images/unsplash.jpg";
import { primaryBlue } from "../theme/color";

const GetStarted = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Refs
  const containerRef = useRef(null);
  const taglineRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // InView
  const containerInView = useInView(containerRef, { margin: "-100px" });
  const taglineInView = useInView(taglineRef, { margin: "-120px" });
  const titleInView = useInView(titleRef, { margin: "-120px" });
  const descriptionInView = useInView(descriptionRef, { margin: "-120px" });
  const buttonInView = useInView(buttonRef, { margin: "-120px" });
  const imageInView = useInView(imageRef, { margin: "-120px" });

  // Animations
  const slideFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 4 },
        background: `linear-gradient(135deg,
          #f0f8ff 0%,
          #e8f4f8 25%,
          #ffffff 50%,
          #f5f9ff 75%,
          #e6f2ff 100%)`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(26, 60, 121, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.04) 0%, transparent 50%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ================= CONTENT ================= */}
        <Box
          sx={{
            flex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Tagline */}
          <motion.div
            ref={taglineRef}
            animate={taglineInView ? "visible" : "hidden"}
            variants={slideFade}
          >
            <Typography
              sx={{
                display: "inline-block",
                px: 2,
                py: 1,
                mb: 2,
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: primaryBlue[400],
                backgroundColor: `${primaryBlue[400]}15`,
                borderRadius: "20px",
              }}
            >
              Psychology & Mental Wellness
            </Typography>
          </motion.div>

          {/* Title */}
          <motion.div
            ref={titleRef}
            animate={titleInView ? "visible" : "hidden"}
            variants={slideFade}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "38px", md: "46px" },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 3,
                background:
                  "linear-gradient(135deg, #1A3C79 0%, #2C5AA0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
             Modern Care for Mental Wellbeing
              {/* <br /> */}
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            ref={descriptionRef}
            animate={descriptionInView ? "visible" : "hidden"}
            variants={slideFade}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                color: "#4a5568",
                lineHeight: 1.7,
                maxWidth: "620px",
                mx: isMobile ? "auto" : "unset",
                mb: 4,
              }}
            >
              Our psychology platform supports individuals, therapists, and
              mental health professionals with secure digital records,
              evidence-based tools, and personalized care pathways.
              We focus on emotional wellbeing, therapy progress tracking, and
              confidential access to mental health data—helping people heal,
              grow, and thrive.
            </Typography>
          </motion.div>

          {/* Button */}
          <motion.div
            ref={buttonRef}
            animate={buttonInView ? "visible" : "hidden"}
            variants={slideFade}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.8,
                fontSize: "16px",
                fontWeight: 700,
                borderRadius: "12px",
                textTransform: "none",
                background:
                  "linear-gradient(135deg, #1A3C79 0%, #2C5AA0 100%)",
                boxShadow: "0 10px 30px rgba(26,60,121,0.35)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover": {
                  background: `linear-gradient(135deg, #153068 0%, #1e4082 100%)`,
                  boxShadow: "0 14px 40px rgba(26,60,121,0.45)",
                  transform: "translateY(-2px)",
                  "&::before": {
                    left: "100%",
                  },
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Start Your Wellness Journey →
            </Button>
          </motion.div>

          {/* Highlights */}
          <Box
            sx={{
              mt: 5,
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {[
              "Evidence-Based Therapy",
              "Secure Mental Records",
              "Professional Support",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  containerInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: primaryBlue[400],
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: primaryBlue[400],
                    }}
                  />
                  {item}
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* ================= IMAGE ================= */}
        <motion.div
          ref={imageRef}
          animate={imageInView ? "visible" : "hidden"}
          variants={imageAnim}
          whileHover={{ scale: isMobile ? 1 : 1.02 }}
          style={{
            flex: 1,
            maxWidth: "520px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: { xs: -10, sm: -15, md: -20 },
                right: { xs: -10, sm: -15, md: -20 },
                width: { xs: "35%", md: "40%" },
                height: { xs: "35%", md: "40%" },
                background: `linear-gradient(45deg, ${primaryBlue[400]}10, transparent)`,
                borderRadius: { xs: "15px", md: "20px" },
                filter: "blur(40px)",
                zIndex: -1,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: { xs: -10, sm: -12, md: -15 },
                left: { xs: -10, sm: -12, md: -15 },
                width: { xs: "25%", md: "30%" },
                height: { xs: "25%", md: "30%" },
                background: `linear-gradient(225deg, #4A90E220, transparent)`,
                borderRadius: { xs: "15px", md: "20px" },
                filter: "blur(30px)",
                zIndex: -1,
              },
            }}
          >
            <Box
              component="img"
              src={abtImg}
              alt="Psychology platform overview"
              sx={{
                width: "100%",
                height: "400px",
                borderRadius: 4,
                boxShadow: `
                  0 25px 50px rgba(0,0,0,0.15),
                  0 0 0 1px rgba(255,255,255,0.5)
                `,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  boxShadow: `
                    0 35px 70px rgba(0,0,0,0.2),
                    0 0 0 1px rgba(255,255,255,0.7)
                  `,
                },
              }}
            />

            {/* Floating Elements */}
            <Box
              sx={{
                position: "absolute",
                top: "10%",
                right: { xs: "-3%", sm: "-5%" },
                width: { xs: 15, sm: 18, md: 20 },
                height: { xs: 15, sm: 18, md: 20 },
                background: `linear-gradient(45deg, ${primaryBlue[400]}, #4A90E2)`,
                borderRadius: "50%",
                opacity: 0.7,
                animation: "float 3s ease-in-out infinite",
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-10px)" },
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "15%",
                left: { xs: "-2%", sm: "-3%" },
                width: { xs: 10, sm: 11, md: 12 },
                height: { xs: 10, sm: 11, md: 12 },
                background: "#27AE60",
                borderRadius: "50%",
                opacity: 0.6,
                animation: "float 3s ease-in-out infinite 1s",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: { xs: "2%", sm: "5%" },
                width: { xs: 8, sm: 9, md: 10 },
                height: { xs: 8, sm: 9, md: 10 },
                background: "#9B59B6",
                borderRadius: "50%",
                opacity: 0.5,
                animation: "float 3s ease-in-out infinite 2s",
              }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default GetStarted;