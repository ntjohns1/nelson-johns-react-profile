import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';

// Motion components for animations
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionStack = motion.create(Stack);
const MotionPaper = motion.create(Paper);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <MotionBox
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      sx={{
        textAlign: 'center',
        mt: 8,
        px: 3,
        position: 'relative',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,201,167,0.1) 0%, rgba(0,201,167,0) 70%)',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: '5%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,126,103,0.1) 0%, rgba(255,126,103,0) 70%)',
          zIndex: -1,
        }}
      />
      
      {/* Main content */}
      <MotionTypography 
        variant="h3" 
        gutterBottom
        variants={itemVariants}
        sx={{
          fontFamily: 'var(--heading-font)',
          fontWeight: 700,
          color: 'var(--midnight-green)',
          mb: 3,
          letterSpacing: '0.02em',
        }}
      >
        Welcome to My Portfolio
      </MotionTypography>
      
      <MotionTypography 
        variant="subtitle1" 
        gutterBottom
        variants={itemVariants}
        sx={{
          fontFamily: 'var(--body-font)',
          fontSize: '1.2rem',
          color: 'var(--dark-cyan)',
          mb: 5,
          maxWidth: '700px',
          mx: 'auto',
          lineHeight: 1.6,
        }}
      >
        Software Development Engineer in Test | Full-Stack Developer
      </MotionTypography>
      
      {/* Featured links section */}
      <MotionPaper
        variants={itemVariants}
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.9) 100%)',
          backdropFilter: 'blur(10px)',
          maxWidth: '800px',
          mx: 'auto',
          mb: 5,
          border: '1px solid rgba(0,201,167,0.2)',
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'var(--heading-font)', 
                fontWeight: 600,
                color: 'var(--rich-black)',
                mb: 3,
              }}
            >
              Connect With Me
            </Typography>
          </Grid>
          
          <Grid>
            <MotionStack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center"
              variants={itemVariants}
            >
              <Button 
                variant="contained" 
                href="#resume"
                sx={{
                  backgroundColor: 'var(--accent-teal)',
                  color: 'white',
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 600,
                  padding: '10px 24px',
                  borderRadius: '4px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'var(--accent-teal)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0, 201, 167, 0.4)',
                  },
                }}
              >
                View Resume
              </Button>
              
              <Button 
                variant="outlined" 
                href="https://github.com/ntjohns1" 
                target="_blank"
                sx={{
                  borderColor: 'var(--midnight-green)',
                  color: 'var(--midnight-green)',
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 500,
                  padding: '10px 24px',
                  borderRadius: '4px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'var(--midnight-green)',
                    backgroundColor: 'rgba(0, 95, 115, 0.05)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                GitHub
              </Button>
              
              <Button 
                variant="outlined" 
                href="https://linkedin.com/in/nelson-johns" 
                target="_blank"
                sx={{
                  borderColor: 'var(--accent-orange)',
                  color: 'var(--accent-orange)',
                  fontFamily: 'var(--heading-font)',
                  fontWeight: 500,
                  padding: '10px 24px',
                  borderRadius: '4px',
                  textTransform: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'var(--accent-orange)',
                    backgroundColor: 'rgba(255, 126, 103, 0.05)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                LinkedIn
              </Button>
            </MotionStack>
          </Grid>
        </Grid>
      </MotionPaper>
    </MotionBox>
  );
};

export default Home;