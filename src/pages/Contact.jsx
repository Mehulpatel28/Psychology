import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  IconButton,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Snackbar,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
  alpha,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon,
  SupportAgent as SupportIcon,
  AccessTime as TimeIcon,
  VerifiedUser as VerifiedIcon,
  Chat as ChatIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = async (data) => {
    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);
    // setFormData(data);
    // setSnackbarOpen(true);
    // reset();
  };

  const handleFAQChange = (panel) => (event, isExpanded) => {
    setExpandedFAQ(isExpanded ? panel : null);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 28 }} />,
      title: "Phone Support",
      content: "(123) 456-7890",
      description: "Mon-Fri from 9am to 6pm EST",
      action: "Call Now",
      color: theme.palette.primary.main,
      gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      title: "Email Us",
      content: "info@mindwellpsychology.com",
      description: "We respond within 24 hours",
      action: "Send Email",
      color: "#9b59b6",
      gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
    },
    {
      icon: <LocationIcon sx={{ fontSize: 28 }} />,
      title: "Visit Office",
      content: "123 Psychology Street",
      description: "Wellness City, WC 12345",
      action: "Get Directions",
      color: "#2ecc71",
      gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
    },
  ];

  const socialMedia = [
    { icon: <FacebookIcon />, label: "Facebook", color: "#1877F2" },
    { icon: <TwitterIcon />, label: "Twitter", color: "#1DA1F2" },
    { icon: <InstagramIcon />, label: "Instagram", color: "#E4405F" },
    { icon: <LinkedInIcon />, label: "LinkedIn", color: "#0A66C2" },
  ];

  const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond within 24 hours during business days. For urgent matters, please call our support line. Our team is dedicated to providing timely and helpful responses to all inquiries.",
      icon: <TimeIcon />,
    },
    {
      question: "Do you offer custom training programs?",
      answer:
        "Yes, we work with organizations to develop customized training programs tailored to specific needs. Contact our training department to discuss your requirements and get a personalized quote.",
      icon: <SupportIcon />,
    },
    {
      question: "Can I access resources on mobile devices?",
      answer:
        "Absolutely! All our resources are mobile-responsive and can be accessed from any device. We also offer a mobile app for iOS and Android for enhanced accessibility.",
      icon: <VerifiedIcon />,
    },
    {
      question: "Do you provide continuing education credits?",
      answer:
        "Yes, many of our training programs offer CE credits. Check individual program details for specific information. We are accredited with major psychology associations.",
      icon: <CheckCircleIcon />,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. For organizational purchases, we also offer invoice-based billing.",
      icon: <ChatIcon />,
    },
    {
      question: "Do you offer student discounts?",
      answer:
        "Yes, we provide special discounts for students and recent graduates. Contact our support team with your student ID for verification and discount codes.",
      icon: <SupportIcon />,
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 4, md: 8 }, mt: { xs: 8, md: 5 } }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              color: theme.palette.primary.dark,
              letterSpacing: "-0.5px",
              mb: 2,
            }}
          >
            Get in Touch with MindWell
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 800,
              margin: "0 auto",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Have questions or need assistance? We're here to help you with all
            your psychology resource needs. Our support team is ready to assist
            you.
          </Typography>
        </Box>
      </motion.div>

      <Grid container spacing={4}>
        {/* Contact Info Cards */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                height: "100%",
                overflow: "hidden",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: theme.palette.primary.light,
                      color: "white",
                      mr: 2,
                    }}
                  >
                    <SupportIcon fontSize="medium" />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.dark,
                    }}
                  >
                    Contact Information
                  </Typography>
                </Box>

                <Stack spacing={3}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          background: info.gradient,
                          color: "white",
                          cursor: "pointer",
                          transition: "all 0.3s",
                          position: "relative",
                          overflow: "hidden",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: theme.shadows[8],
                          },
                        }}
                      >
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.2)",
                                backdropFilter: "blur(10px)",
                                mr: 2,
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {info.title}
                            </Typography>
                          </Box>

                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 0.5 }}
                          >
                            {info.content}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ opacity: 0.9, mb: 2 }}
                          >
                            {info.description}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography variant="caption" sx={{ opacity: 0.8 }}>
                              {info.action}
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </Stack>

                <Divider sx={{ my: 4 }} />

                {/* Social Media */}
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 3 }}
                  >
                    Follow Us on Social Media
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    {socialMedia.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <IconButton
                          sx={{
                            backgroundColor: alpha(social.color, 0.1),
                            color: social.color,
                            width: 56,
                            height: 56,
                            "&:hover": {
                              backgroundColor: alpha(social.color, 0.2),
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>

                {/* Stats */}
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Average Response Time
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                  >
                    2.5 hours
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Based on last 30 days
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Contact Form - Vertical Layout */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.background.paper,
                  1
                )} 0%, ${alpha(theme.palette.background.default, 0.95)} 100%)`,
                overflow: "visible",
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: "3px 3px 0 0",
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                <Box sx={{ textAlign: "center", mb: 5 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mb: 2.5,
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.2
                      )}`,
                    }}
                  >
                    <SendIcon fontSize="large" />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      mb: 1,
                    }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: "auto" }}
                  >
                    Have questions or need assistance? Fill out the form below
                    and we'll get back to you within 24 hours.
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{ maxWidth: 600, mx: "auto" }}>
                    {/* Full Name Fields */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Full Name *
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            placeholder="John"
                            variant="outlined"
                            {...register("firstName", {
                              required: "First name is required",
                            })}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                            InputProps={{
                              sx: {
                                borderRadius: 1.5,
                                backgroundColor: theme.palette.background.paper,
                                "&:hover": {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            placeholder="Doe"
                            variant="outlined"
                            {...register("lastName", {
                              required: "Last name is required",
                            })}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                            InputProps={{
                              sx: {
                                borderRadius: 1.5,
                                backgroundColor: theme.palette.background.paper,
                                "&:hover": {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    {/* Contact Information */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Contact Information *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="john@example.com"
                        variant="outlined"
                        type="email"
                        sx={{ mb: 2 }}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        InputProps={{
                          sx: {
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.background.paper,
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        placeholder="+1 (555) 123-4567"
                        variant="outlined"
                        {...register("phone")}
                        InputProps={{
                          sx: {
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.background.paper,
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Box>

                    {/* Organization */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Organization
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Your company name"
                        variant="outlined"
                        {...register("organization")}
                        InputProps={{
                          sx: {
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.background.paper,
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Box>

                    {/* Subject */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Subject *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="How can we help you?"
                        variant="outlined"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                        InputProps={{
                          sx: {
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.background.paper,
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Box>

                    {/* Message */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: theme.palette.text.primary,
                        }}
                      >
                        Your Message *
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="Please describe your inquiry in detail..."
                        variant="outlined"
                        multiline
                        rows={5}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 20,
                            message: "Message must be at least 20 characters",
                          },
                          maxLength: {
                            value: 1000,
                            message: "Message must not exceed 1000 characters",
                          },
                        })}
                        error={!!errors.message}
                        helperText={
                          errors.message?.message ||
                          `${watch("message", "").length}/1000 characters`
                        }
                        InputProps={{
                          sx: {
                            borderRadius: 1.5,
                            backgroundColor: theme.palette.background.paper,
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Box>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        // type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={isSubmitting}
                        startIcon={!isSubmitting ? <SendIcon /> : null}
                        sx={{
                          py: 2.5,
                          borderRadius: 1.5,
                          fontSize: "1rem",
                          fontWeight: 600,
                          textTransform: "none",
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                          boxShadow: `0 4px 20px ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )}`,
                          "&:hover": {
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                            boxShadow: `0 6px 25px ${alpha(
                              theme.palette.primary.main,
                              0.4
                            )}`,
                          },
                          "&:disabled": {
                            background: theme.palette.action.disabledBackground,
                          },
                        }}
                      >
                        {isSubmitting ? (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <CircularProgress size={20} color="inherit" />
                            Sending Message...
                          </Box>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        mt: 3,
                        display: "block",
                        textAlign: "center",
                        lineHeight: 1.6,
                      }}
                    >
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/privacy"
                        color="primary"
                        sx={{ textDecoration: "none" }}
                      >
                        privacy policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms"
                        color="primary"
                        sx={{ textDecoration: "none" }}
                      >
                        terms of service
                      </Link>
                      .
                    </Typography>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.dark,
                mb: 2,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Find quick answers to common questions about our services and
              support
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {faqItems.map((item, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Accordion
                    expanded={expandedFAQ === index}
                    onChange={handleFAQChange(index)}
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      mb: 2,
                      "&:before": { display: "none" },
                      "&.Mui-expanded": {
                        margin: 0,
                        borderColor: theme.palette.primary.main,
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.02
                        ),
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        borderRadius: 3,
                        "&.Mui-expanded": {
                          minHeight: 56,
                        },
                        "& .MuiAccordionSummary-content": {
                          alignItems: "center",
                          gap: 2,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          color:
                            expandedFAQ === index
                              ? theme.palette.primary.main
                              : "inherit",
                        }}
                      >
                        {item.icon}
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {item.question}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, pl: 6 }}
                      >
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          icon={<CheckCircleIcon fontSize="inherit" />}
          sx={{
            width: "100%",
            borderRadius: 2,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Message Sent Successfully!
            </Typography>
            <Typography variant="body2">
              Thank you for contacting us. We'll get back to you within 24
              hours.
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
