import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Psychology,
} from "@mui/icons-material";
import logo from "../assets/logo/logo-1.png"; // ✅ LOGO IMAGE

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#020617",
        color: "#e5e7eb",
        pt: { xs: 5, md: 7 },
        pb: { xs: 3, md: 4 },
        position: "relative",
        overflow: "hidden",
        // Enhanced background with subtle gradient and patterns
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 20%),
          linear-gradient(135deg, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(45deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: `
          100% 100%,
          100% 100%,
          28px 28px,
          28px 28px
        `,
        // Top border accent
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
        },
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: { xs: 80, md: 120 },
          height: { xs: 80, md: 120 },
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: { xs: 60, md: 100 },
          height: { xs: 60, md: 100 },
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}>
          <Grid
            container
            columnSpacing={{ xs: 4, md: 8 }}
            rowSpacing={{ xs: 4, md: 5 }}
          >
            {/* 1️⃣ BRAND SECTION */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
             <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="MindWell Logo"
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  background: "#0085A4",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MINDCURE COUNSELLING
              </Typography>
            </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  lineHeight: 1.7,
                  opacity: 0.8,
                  mb: 3,
                  pr: { md: 2 },
                }}
              >
                Evidence-based psychological resources and training for
                professionals and individuals worldwide.
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                {[
                  { Icon: Facebook, color: "#1877F2" },
                  { Icon: Twitter, color: "#1DA1F2" },
                  { Icon: Instagram, color: "#E4405F" },
                  { Icon: LinkedIn, color: "#0A66C2" },
                ].map(({ Icon, color }, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: color,
                        transform: "translateY(-2px)",
                        boxShadow: `0 4px 12px ${color}40`,
                      },
                      width: { xs: 34, md: 38 },
                      height: { xs: 34, md: 38 },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* 2️⃣ QUICK LINKS */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #2563eb, transparent)",
                    borderRadius: "2px",
                  },
                }}
              >
                Quick Links
              </Typography>

              <Box sx={{ display: "grid", rowGap: 1.3 }}>
                {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
                  (item, i) => (
                    <Link
                      key={i}
                      href="#"
                      underline="none"
                      sx={{
                        fontSize: { xs: "13px", md: "14px" },
                        color: "#cbd5f5",
                        transition: "all 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        "&:hover": {
                          color: "#60a5fa",
                          transform: "translateX(4px)",
                        },
                        "&::before": {
                          content: '"›"',
                          opacity: 0,
                          transition: "opacity 0.2s ease",
                        },
                        "&:hover::before": {
                          opacity: 1,
                        },
                      }}
                    >
                      {item}
                    </Link>
                  )
                )}
              </Box>
            </Grid>

            {/* 3️⃣ RESOURCES */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #2563eb, transparent)",
                    borderRadius: "2px",
                  },
                }}
              >
                Resources
              </Typography>

              <Box sx={{ display: "grid", rowGap: 1.3 }}>
                {[
                  "Clinical Tools",
                  "Therapy Worksheets",
                  "Research Papers",
                  "Professional Training",
                  "Webinars",
                  "Case Studies",
                ].map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    underline="none"
                    sx={{
                      fontSize: { xs: "13px", md: "14px" },
                      color: "#cbd5f5",
                      transition: "all 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": {
                        color: "#60a5fa",
                        transform: "translateX(4px)",
                      },
                      "&::before": {
                        content: '"›"',
                        opacity: 0,
                        transition: "opacity 0.2s ease",
                      },
                      "&:hover::before": {
                        opacity: 1,
                      },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* 4️⃣ CONTACT & NEWSLETTER */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "30px",
                    height: "2px",
                    background: "linear-gradient(90deg, #2563eb, transparent)",
                    borderRadius: "2px",
                  },
                }}
              >
                Contact Us
              </Typography>

              <Box sx={{ display: "grid", rowGap: 1.8, mb: 3 }}>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <LocationOn
                    fontSize="small"
                    sx={{
                      color: "#60a5fa",
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography fontSize={{ xs: "13px", md: "14px" }} sx={{ opacity: 0.9 }}>
                    123 Wellness Avenue, Suite 500<br />
                    Mindful City, MC 12345
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <Phone
                    fontSize="small"
                    sx={{
                      color: "#60a5fa",
                      flexShrink: 0,
                    }}
                  />
                  <Typography fontSize={{ xs: "13px", md: "14px" }} sx={{ opacity: 0.9 }}>
                    (123) 456-7890
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                  <Email
                    fontSize="small"
                    sx={{
                      color: "#60a5fa",
                      flexShrink: 0,
                    }}
                  />
                  <Typography fontSize={{ xs: "13px", md: "14px" }} sx={{ opacity: 0.9 }}>
                    contact@mindcurecounselling.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255,255,255,0.07)",
                      color: "#ffffff",
                      fontSize: { xs: "13px", md: "14px" },
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderColor: "rgba(96, 165, 250, 0.5)",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "rgba(255,255,255,0.12)",
                        borderColor: "#60a5fa",
                        boxShadow: "0 0 0 2px rgba(96, 165, 250, 0.1)",
                      },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    px: 3,
                    fontSize: { xs: "12px", md: "13px" },
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #2563eb, #4f46e5)",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                    minWidth: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      background: "linear-gradient(90deg, #1d4ed8, #4338ca)",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* BOTTOM BAR */}
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              mt: { xs: 5, md: 6 },
              pt: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
            }}
          >
            <Typography
              fontSize={{ xs: "12px", md: "13px" }}
              sx={{ opacity: 0.7, lineHeight: 1.5 }}
            >
              © {new Date().getFullYear()} Mindcure Counselling. All rights reserved.
              <br />
              <Box component="span" sx={{ fontSize: "11px", opacity: 0.6 }}>
                Providing evidence-based mental health resources since 2015.
              </Box>
            </Typography>

            <Box sx={{ display: "flex", gap: { xs: 2, md: 3 } }}>
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  underline="none"
                  sx={{
                    fontSize: { xs: "12px", md: "13px" },
                    color: "#cbd5f5",
                    opacity: 0.8,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#60a5fa",
                      opacity: 1,
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;