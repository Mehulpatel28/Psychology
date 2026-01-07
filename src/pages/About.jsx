import React from 'react'
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Card, 
  CardContent,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { motion } from 'framer-motion'
import {
  Psychology as PsychologyIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  Group as GroupIcon,
  School as SchoolIcon,
  Timeline as TimelineIcon,
  Public as TargetIcon,
  Visibility as VisionIcon
} from '@mui/icons-material'

const About = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const values = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Evidence-Based',
      description: 'All our resources are grounded in scientific research and proven methodologies.',
      color: theme.palette.primary.main,
      gradient: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    },
    {
      icon: <EmojiEmotionsIcon sx={{ fontSize: 40 }} />,
      title: 'Positive Approach',
      description: 'Focus on strengths, resilience, and growth rather than just pathology.',
      color: theme.palette.secondary.main,
      gradient: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Community Focused',
      description: 'Building a supportive network of mental health professionals.',
      color: '#2ecc71',
      gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Continuous Learning',
      description: 'Commitment to ongoing education and professional development.',
      color: '#f1c40f',
      gradient: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)',
    },
  ]

  const timeline = [
    { 
      year: '2010', 
      event: 'Founded by Dr. Alex Morgan with a vision to improve mental health resources',
      icon: <TargetIcon />
    },
    { 
      year: '2013', 
      event: 'Launched first online training program for professionals',
      icon: <SchoolIcon />
    },
    { 
      year: '2016', 
      event: 'Expanded to international markets with multilingual resources',
      icon: <GroupIcon />
    },
    { 
      year: '2020', 
      event: 'Reached 5,000+ trained professionals worldwide',
      icon: <EmojiEmotionsIcon />
    },
    { 
      year: '2023', 
      event: 'Launched AI-powered therapy tools and mobile applications',
      icon: <PsychologyIcon />
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mt: { xs: 8, md: 5 } }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, md: 10 },
          px: { xs: 2, sm: 0 }
        }}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800, 
              color: theme.palette.primary.dark,
              letterSpacing: '-0.5px',
              mb: 3
            }}
          >
            About MindWell Psychology
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            sx={{ 
              color: theme.palette.text.secondary, 
              maxWidth: 800, 
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Empowering mental health professionals with evidence-based resources and training since 2010
          </Typography>
        </Box>
      </motion.div>

      {/* Mission & Vision Section */}
      <Grid container spacing={4} alignItems="stretch" sx={{ mb: { xs: 6, md: 10 } }}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card 
              elevation={0}
              sx={{ 
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: `1px solid ${theme.palette.divider}`,
                p: { xs: 3, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  p: 1.5, 
                  borderRadius: 2, 
                  backgroundColor: theme.palette.primary.light,
                  color: 'white',
                  mr: 2
                }}>
                  <TargetIcon fontSize="medium" />
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700, 
                    color: theme.palette.primary.dark 
                  }}
                >
                  Our Mission
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.8,
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                To bridge the gap between psychological research and clinical practice by providing accessible, 
                evidence-based resources that empower mental health professionals to deliver exceptional care.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.8,
                  color: theme.palette.text.primary
                }}
              >
                We believe that when professionals have the right tools and knowledge, they can help more people 
                lead meaningful, resilient, and authentic lives.
              </Typography>
            </Card>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                p: { xs: 3, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box sx={{ 
                position: 'absolute', 
                top: -20, 
                right: -20,
                opacity: 0.1
              }}>
                <VisionIcon sx={{ fontSize: 120 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  p: 1.5, 
                  borderRadius: 2, 
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  mr: 2
                }}>
                  <VisionIcon fontSize="medium" />
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                  }}
                >
                  Our Vision
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.2rem', 
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                To create a world where every mental health professional has access to the best tools 
                and knowledge, enabling them to help more people thrive and reach their full potential.
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Values Section */}
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            sx={{ 
              fontWeight: 800, 
              color: theme.palette.primary.dark,
              mb: 2
            }}
          >
            Our Core Values
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.palette.text.secondary,
              maxWidth: 600,
              margin: '0 auto'
            }}
          >
            The principles that guide everything we do
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: theme.shadows[8],
                      borderColor: value.color
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        padding: 2.5,
                        borderRadius: '50%',
                        background: value.gradient,
                        color: 'white',
                        marginBottom: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 2
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Timeline Section */}
      <Box sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            sx={{ 
              fontWeight: 800, 
              color: theme.palette.primary.dark,
              mb: 2
            }}
          >
            Our Journey
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.palette.text.secondary,
              maxWidth: 600,
              margin: '0 auto'
            }}
          >
            Milestones in our commitment to mental health excellence
          </Typography>
        </Box>

        <Box sx={{ 
          position: 'relative', 
          maxWidth: 900, 
          margin: '0 auto',
          px: { xs: 2, sm: 0 }
        }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '50%', md: '50%' },
              transform: 'translateX(-50%)',
              width: '4px',
              height: '100%',
              backgroundColor: theme.palette.primary.light,
              display: { xs: 'none', md: 'block' }
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 4,
                  position: 'relative',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                }}
              >
                {/* Year Badge */}
                <Box
                  sx={{
                    width: { xs: '100%', md: 'auto' },
                    textAlign: { xs: 'center', md: 'left' },
                    mb: { xs: 2, md: 0 },
                    position: 'relative',
                    zIndex: 2,
                    flexShrink: 0,
                    px: { xs: 2, md: 0 }
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.5,
                      py: 1.5,
                      px: 3,
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      borderRadius: 50,
                      boxShadow: theme.shadows[3],
                      minWidth: 120
                    }}
                  >
                    {item.icon}
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.year}
                    </Typography>
                  </Box>
                </Box>

                {/* Content Card */}
                <Box
                  sx={{
                    flex: 1,
                    ml: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                    mr: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                    width: { xs: '100%', md: 'auto' }
                  }}
                >
                  <Card
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'white',
                      position: 'relative',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        [index % 2 === 0 ? 'left' : 'right']: -8,
                        transform: 'translateY(-50%) rotate(45deg)',
                        width: 16,
                        height: 16,
                        backgroundColor: 'white',
                        display: { xs: 'none', md: 'block' }
                      }
                    }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.7,
                        color: theme.palette.text.primary
                      }}
                    >
                      {item.event}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card 
          elevation={0}
          sx={{ 
            borderRadius: 4,
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            color: 'white',
            p: { xs: 4, md: 6 },
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            Making a Difference Together
          </Typography>
          <Grid container spacing={10} alignItems="center" justifyContent="center">
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#3498db' }}>
                5,000+
              </Typography>
              <Typography variant="body1">Trained Professionals</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#2ecc71' }}>
                50+
              </Typography>
              <Typography variant="body1">Countries Reached</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#9b59b6' }}>
                100+
              </Typography>
              <Typography variant="body1">Resources Available</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#f1c40f' }}>
                13
              </Typography>
              <Typography variant="body1">Years of Excellence</Typography>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </Container>
  )
}

export default About