import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);
const MotionIconButton = motion.create(IconButton);
const MotionTypography = motion.create(Typography);

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);

    // TODO: add scroll event listener to update activeSection
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
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
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: { xs: '80px', sm: '120px' },
        background: 'linear-gradient(180deg, var(--rich-black) 0%, var(--midnight-green) 100%)',
        color: 'var(--vanilla)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 3,
        boxShadow: '4px 0 15px rgba(0,0,0,0.1)',
        zIndex: 1000,
      }}
    >
      <Box sx={{ width: '100%' }}>
        <MotionBox 
          variants={logoVariants}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--dark-cyan) 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            <MotionTypography 
              variant="h5" 
              sx={{ 
                fontFamily: 'var(--heading-font)',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              NJ
            </MotionTypography>
          </Box>
        </MotionBox>

        <Divider sx={{ 
          my: 2, 
          backgroundColor: 'rgba(255,255,255,0.1)',
          width: '80%',
          mx: 'auto',
        }} />

        <Stack spacing={2} sx={{ alignItems: 'center', mt: 2 }}>
          <MotionButton 
            variants={itemVariants}
            href="#about" 
            color="inherit"
            startIcon={<PersonIcon />}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              width: '90%',
              transition: 'all 0.3s ease',
              backgroundColor: activeSection === 'about' ? 'rgba(0, 201, 167, 0.2)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 201, 167, 0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>About</Box>
          </MotionButton>

          <MotionButton 
            variants={itemVariants}
            href="#skills" 
            color="inherit"
            startIcon={<CodeIcon />}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              width: '90%',
              transition: 'all 0.3s ease',
              backgroundColor: activeSection === 'skills' ? 'rgba(0, 201, 167, 0.2)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 201, 167, 0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Skills</Box>
          </MotionButton>

          <MotionButton 
            variants={itemVariants}
            href="#work" 
            color="inherit"
            startIcon={<WorkIcon />}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              width: '90%',
              transition: 'all 0.3s ease',
              backgroundColor: activeSection === 'work' ? 'rgba(0, 201, 167, 0.2)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 201, 167, 0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Work</Box>
          </MotionButton>

          <MotionButton 
            variants={itemVariants}
            href="#contact" 
            color="inherit"
            startIcon={<EmailIcon />}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              width: '90%',
              transition: 'all 0.3s ease',
              backgroundColor: activeSection === 'contact' ? 'rgba(0, 201, 167, 0.2)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0, 201, 167, 0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Contact</Box>
          </MotionButton>
        </Stack>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
        <MotionIconButton 
          variants={itemVariants}
          href="https://linkedin.com/in/nelson-johns" 
          target="_blank" 
          sx={{ 
            color: 'var(--accent-teal)',
            '&:hover': {
              color: 'white',
              backgroundColor: 'rgba(0, 201, 167, 0.2)',
            },
          }}
        >
          <LinkedInIcon />
        </MotionIconButton>
        <MotionIconButton 
          variants={itemVariants}
          href="https://github.com/ntjohns1" 
          target="_blank" 
          sx={{ 
            color: 'var(--alloy-orange)',
            '&:hover': {
              color: 'white',
              backgroundColor: 'rgba(255, 126, 103, 0.2)',
            },
          }}
        >
          <GitHubIcon />
        </MotionIconButton>
      </Box>
    </MotionBox>
  );
};

export default Sidebar;