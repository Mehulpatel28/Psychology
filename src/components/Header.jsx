import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo-1.png"; // ✅ LOGO IMAGE

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Updates", path: "/updates" },
    { name: "Contact Us", path: "/contact" },
  ];

  // ================= HIDE / SHOW HEADER =================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(
        !(currentScrollY > lastScrollY.current && currentScrollY > 120)
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);

  const handleNavigation = (path) => {
    setMobileOpen(false);
    navigate(path);
  };

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // ================= MOBILE DRAWER =================
  const drawer = (
    <Box sx={{ width: 300 }}>
      {/* Drawer Header */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={() => setMobileOpen(false)}
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
            sx={{ width: 55, height: 55 }}
          />
          <Typography fontWeight={800}>Mindcure Counselling</Typography>
        </Box>

        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Nav Items */}
      <List sx={{ py: 1 }}>
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <ListItem key={item.name} disablePadding>
              <Button
                fullWidth
                onClick={() => handleNavigation(item.path)}
                sx={{
                  justifyContent: "flex-start",
                  px: 3,
                  py: 1.8,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#3498db" : "#2c3e50",
                  background: active
                    ? "linear-gradient(90deg, rgba(52,152,219,0.12), transparent)"
                    : "transparent",
                  borderLeft: active
                    ? "4px solid #3498db"
                    : "4px solid transparent",
                }}
              >
                {item.name}
              </Button>
            </ListItem>
          );
        })}
      </List>

      {/* 🔥 MOBILE JOIN US BUTTON (RESTORED) */}
      <Box sx={{ px: 3, mt: 2 }}>
        <Button
          fullWidth
          // onClick={() => handleNavigation("/join")}
          sx={{
            py: 1.4,
            fontWeight: 700,
            color: "#fff",
            borderRadius: 2,
            background: "linear-gradient(90deg,#3498db,#9b59b6)",
            boxShadow: "0 8px 20px rgba(52,152,219,0.35)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 12px 26px rgba(52,152,219,0.45)",
            },
          }}
        >
          Join Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -110 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ position: "sticky", top: 0, zIndex: 1200 }}
    >
      <AppBar
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 78,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}
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
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  background: "#0085A4",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MINDCURE COUNSELLING
              </Typography>
            </Box>

            {/* DESKTOP NAV + JOIN */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                     <Button
                      key={item.name}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: active ? "#3498db" : "#2c3e50",
                        fontWeight: active ? 700 : 500,
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: "50%",
                          bottom: -6,
                          width: active ? "100%" : "0%",
                          height: 3,
                          background:
                            "linear-gradient(90deg,#3498db,#9b59b6)",
                          transform: "translateX(-50%)",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}

                {/* 🔥 DESKTOP JOIN US BUTTON (RESTORED) */}
                <Button
                  component={Link}
                  // to="/join"
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1,
                    fontWeight: 700,
                    color: "#fff",
                    borderRadius: 2,
                    background: "linear-gradient(90deg,#3498db,#9b59b6)",
                    boxShadow: "0 6px 18px rgba(52,152,219,0.35)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 26px rgba(52,152,219,0.45)",
                    },
                  }}
                >
                  Join Us
                </Button>
              </Box>
            )}

            {/* MOBILE MENU ICON */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </motion.div>
  );
};

export default Header;
