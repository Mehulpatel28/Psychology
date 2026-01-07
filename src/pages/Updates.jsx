import React, { useState } from 'react'
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Chip, 
  Button, 
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Avatar,
  AvatarGroup,
  alpha
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FilterListIcon from '@mui/icons-material/FilterList'
import EmailIcon from '@mui/icons-material/Email'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import PsychologyIcon from '@mui/icons-material/Psychology'

const Updates = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [bookmarkedPosts, setBookmarkedPosts] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cognitive Behavioral Therapy',
      excerpt: 'Exploring new developments and integration with positive psychology approaches for better patient outcomes.',
      category: 'Research',
      date: 'Jan 15, 2024',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read',
      authorAvatar: '/images/avatar1.jpg',
      tags: ['CBT', 'Innovation', 'Psychology'],
      trending: true,
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      title: 'Mindfulness-Based Stress Reduction Techniques',
      excerpt: 'Practical MBSR techniques for therapists to incorporate in their practice with proven results.',
      category: 'Techniques',
      date: 'Jan 10, 2024',
      author: 'Dr. Michael Chen',
      readTime: '8 min read',
      authorAvatar: '/images/avatar2.jpg',
      tags: ['Mindfulness', 'Stress', 'Therapy'],
      trending: true,
      color: '#9b59b6',
    },
    {
      id: 3,
      title: 'Positive Psychology Interventions for Depression',
      excerpt: 'Evidence-based approaches using strength-based interventions to combat depressive symptoms.',
      category: 'Clinical Practice',
      date: 'Jan 5, 2024',
      author: 'Dr. Emma Rodriguez',
      readTime: '6 min read',
      authorAvatar: '/images/avatar3.jpg',
      tags: ['Depression', 'Positive Psychology', 'Interventions'],
      trending: false,
      color: '#2ecc71',
    },
    {
      id: 4,
      title: 'Digital Mental Health Tools Review 2024',
      excerpt: 'Comprehensive review of the latest digital tools transforming mental health professional practice.',
      category: 'Technology',
      date: 'Dec 28, 2023',
      author: 'Dr. James Wilson',
      readTime: '10 min read',
      authorAvatar: '/images/avatar4.jpg',
      tags: ['Digital Health', 'Tools', 'Review'],
      trending: true,
      color: '#e74c3c',
    },
    {
      id: 5,
      title: 'Building Resilience in Children and Adolescents',
      excerpt: 'Strategies for helping young people develop psychological resilience in challenging environments.',
      category: 'Child Psychology',
      date: 'Dec 20, 2023',
      author: 'Dr. Lisa Chen',
      readTime: '7 min read',
      authorAvatar: '/images/avatar5.jpg',
      tags: ['Resilience', 'Youth', 'Development'],
      trending: false,
      color: '#f39c12',
    },
    {
      id: 6,
      title: 'Integrating ACT with Traditional Therapeutic Approaches',
      excerpt: 'How Acceptance and Commitment Therapy complements and enhances existing therapeutic modalities.',
      category: 'Therapy Integration',
      date: 'Dec 15, 2023',
      author: 'Dr. Alex Morgan',
      readTime: '9 min read',
      authorAvatar: '/images/avatar6.jpg',
      tags: ['ACT', 'Integration', 'Therapy'],
      trending: true,
      color: '#3498db',
    },
  ]

  const categories = [
    { name: 'All', count: blogPosts.length, icon: <PsychologyIcon /> },
    { name: 'Research', count: 2, icon: <TrendingUpIcon /> },
    { name: 'Techniques', count: 1, icon: <AccessTimeIcon /> },
    { name: 'Clinical Practice', count: 1, icon: <PersonIcon /> },
    { name: 'Technology', count: 1, icon: <CalendarTodayIcon /> },
    { name: 'Child Psychology', count: 1, icon: <PersonIcon /> },
    { name: 'Therapy Integration', count: 1, icon: <PsychologyIcon /> },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const handleBookmark = (postId) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const trendingPosts = blogPosts.filter(post => post.trending)

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, mt: { xs: 8, md: 5 } }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 6 },
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
              mb: 2
            }}
          >
            Latest Updates & Research
          </Typography>
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            sx={{ 
              color: theme.palette.text.secondary, 
              maxWidth: 800, 
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400,
              mb: 3
            }}
          >
            Stay updated with the latest research, techniques, and insights in psychology
          </Typography>
          
          {/* Trending Articles */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: 2,
                flexWrap: 'wrap'
              }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Trending now:
                </Typography>
                <AvatarGroup max={4} spacing="small">
                  {trendingPosts.slice(0, 3).map((post, index) => (
                    <Avatar 
                      key={post.id}
                      alt={post.author}
                      src={post.authorAvatar}
                      sx={{ 
                        width: 32, 
                        height: 32,
                        border: `2px solid ${theme.palette.background.paper}`,
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                  {trendingPosts.length} trending articles
                </Typography>
              </Box>
            </motion.div>
          )}
        </Box>
      </motion.div>

      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box sx={{ 
          mb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 0 }
        }}>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={2}
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <TextField
              fullWidth
              placeholder="Search articles, topics, or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: theme.palette.text.secondary }} />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => setSearchTerm('')}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                  height: 54,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                  },
                }
              }}
            />
            
            <Button
              variant="contained"
              startIcon={<FilterListIcon />}
              onClick={() => setShowFilters(!showFilters)}
              sx={{
                minWidth: 120,
                height: 54,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              {isMobile ? 'Filter' : 'Show Filters'}
            </Button>
          </Stack>

          {/* Categories */}
          <AnimatePresence>
            {showFilters || !isMobile ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Stack 
                  direction="row" 
                  spacing={1} 
                  flexWrap="wrap" 
                  justifyContent="center"
                  sx={{ mb: 2 }}
                >
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Chip
                        icon={category.icon}
                        label={`${category.name} (${category.count})`}
                        onClick={() => setSelectedCategory(category.name)}
                        variant={selectedCategory === category.name ? "filled" : "outlined"}
                        sx={{
                          backgroundColor: selectedCategory === category.name 
                            ? theme.palette.primary.main 
                            : 'transparent',
                          color: selectedCategory === category.name 
                            ? theme.palette.primary.contrastText 
                            : theme.palette.text.primary,
                          fontWeight: 500,
                          cursor: 'pointer',
                          mb: 1,
                          '& .MuiChip-icon': {
                            color: selectedCategory === category.name 
                              ? theme.palette.primary.contrastText 
                              : 'inherit',
                          },
                          '&:hover': {
                            backgroundColor: selectedCategory === category.name 
                              ? theme.palette.primary.dark 
                              : alpha(theme.palette.primary.main, 0.1),
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Box>
      </motion.div>

      {/* Blog Posts Grid */}
      <AnimatePresence>
        {filteredPosts.length > 0 ? (
          <Grid container spacing={3}>
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} sm={6} lg={4} key={post.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                        borderColor: alpha(theme.palette.primary.main, 0.3),
                      },
                    }}
                  >
                    {/* Trending Badge */}
                    {post.trending && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          zIndex: 2,
                        }}
                      >
                        <Chip
                          icon={<TrendingUpIcon />}
                          label="Trending"
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.warning.main,
                            color: theme.palette.warning.contrastText,
                            fontWeight: 600,
                            '& .MuiChip-icon': {
                              color: 'inherit',
                            },
                          }}
                        />
                      </Box>
                    )}

                    {/* Bookmark Button */}
                    <IconButton
                      onClick={() => handleBookmark(post.id)}
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 2,
                        backgroundColor: alpha(theme.palette.background.paper, 0.9),
                        '&:hover': {
                          backgroundColor: theme.palette.background.paper,
                        },
                      }}
                    >
                      {bookmarkedPosts.includes(post.id) ? (
                        <BookmarkIcon sx={{ color: theme.palette.primary.main }} />
                      ) : (
                        <BookmarkBorderIcon />
                      )}
                    </IconButton>

                    {/* Category Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 200,
                        left: 16,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          backgroundColor: alpha(post.color, 0.9),
                          color: 'white',
                          fontWeight: 600,
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    </Box>

                    {/* Card Image/Header */}
                    <CardMedia
                      component="div"
                      sx={{
                        height: 180,
                        backgroundColor: alpha(post.color, 0.1),
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: post.color,
                        fontSize: '3.5rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        overflow: 'hidden',
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          backgroundColor: post.color,
                        }
                      }}
                    >
                      {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                    </CardMedia>

                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 2,
                          lineHeight: 1.3,
                          flexGrow: 1,
                        }}
                      >
                        {post.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        paragraph
                        sx={{ 
                          mb: 3,
                          lineHeight: 1.6,
                          flexGrow: 1,
                        }}
                      >
                        {post.excerpt}
                      </Typography>

                      {/* Tags */}
                      <Stack direction="row" spacing={0.5} sx={{ mb: 3, flexWrap: 'wrap' }}>
                        {post.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                              mr: 0.5,
                              mb: 0.5,
                              fontSize: '0.75rem',
                              borderColor: alpha(theme.palette.primary.main, 0.2),
                              color: theme.palette.text.secondary,
                            }}
                          />
                        ))}
                      </Stack>

                      {/* Footer */}
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mt: 'auto',
                        pt: 2,
                        borderTop: `1px solid ${theme.palette.divider}`,
                      }}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarTodayIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
                            <Typography variant="caption" color="text.secondary">
                              {post.date}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AccessTimeIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />
                            <Typography variant="caption" color="text.secondary">
                              {post.readTime}
                            </Typography>
                          </Box>
                        </Stack>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar 
                            sx={{ 
                              width: 28, 
                              height: 28,
                              bgcolor: alpha(post.color, 0.1),
                              color: post.color,
                              fontSize: '0.875rem',
                            }}
                          >
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          <Typography variant="caption" color="text.secondary">
                            {post.author}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              py: 8,
              px: 2
            }}>
              <SearchIcon sx={{ fontSize: 60, color: theme.palette.text.disabled, mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary, mb: 1 }}>
                No articles found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search or filter to find what you're looking for.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                sx={{ mt: 3 }}
              >
                Clear all filters
              </Button>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            mt: { xs: 6, md: 8 },
            mb: 4,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: alpha(theme.palette.secondary.main, 0.05),
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <EmailIcon sx={{ 
              fontSize: 48, 
              color: theme.palette.primary.main,
              mb: 2 
            }} />
            
            <Typography 
              variant={isMobile ? "h5" : "h4"} 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                color: theme.palette.primary.dark,
                mb: 2
              }}
            >
              Never Miss an Update
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary, 
                mb: 4, 
                maxWidth: 600, 
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              Subscribe to our newsletter and get the latest psychology research, tools, and resources delivered to your inbox.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              sx={{ 
                maxWidth: 500, 
                margin: '0 auto',
                alignItems: 'center'
              }}
            >
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                size="medium"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                }}
              />
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  minWidth: 160,
                  height: 56,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
              >
                Subscribe
              </Button>
            </Stack>
            
            <Typography 
              variant="caption" 
              sx={{ 
                color: theme.palette.text.secondary,
                mt: 3,
                display: 'block'
              }}
            >
              Join 5,000+ professionals who receive our weekly updates
            </Typography>
          </Box>
        </Card>
      </motion.div>
    </Container>
  )
}

export default Updates