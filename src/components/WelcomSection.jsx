import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { NameModelCanvas } from './NameModelCanvas';


const WelcomeSection = () => {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const timer = setTimeout(() => {
            setVisible(true);
        }, 300);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timer);
        };
    }, []);

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                background: 'transparent',
                color: 'var(--vanilla)',
                padding: { xs: 1, md: 2 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.2,
                    zIndex: 0,
                    
                    
                }}
            />


            <Box sx={{ 
                position: 'relative', 
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '800px',
            }}>
                <NameModelCanvas />
                
                <Typography 
                    variant="h5" 
                    sx={{ 
                        mb: 2, 
                        color: 'var(--tiffany-blue)',
                        fontFamily: 'var(--heading-font)',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        opacity: 0,
                        visibility: visible ? 'visible' : 'hidden',
                        animation: visible ? 'fadeIn 0.8s ease-out forwards' : 'none',
                        animationDelay: '0.3s',
                        textAlign: 'center',
                    }}
                >
                    Full-Stack Developer
                </Typography>
                
                <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        mb: 4, 
                        color: 'var(--vanilla)',
                        fontFamily: 'var(--body-font)',
                        fontWeight: 400,
                        opacity: 0,
                        visibility: visible ? 'visible' : 'hidden',
                        animation: visible ? 'fadeIn 0.8s ease-out forwards' : 'none',
                        animationDelay: '0.5s',
                        textAlign: 'center',
                    }}
                >
                    Test Engineer / Web Developer
                </Typography>
                
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    sx={{ 
                        mt: 4,
                        opacity: 0,
                        visibility: visible ? 'visible' : 'hidden',
                        animation: visible ? 'fadeIn 0.8s ease-out forwards' : 'none',
                        animationDelay: '0.7s',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <Button
                        variant="contained"
                        href="#contact"
                        size="large"
                        sx={{

                            backgroundColor: 'var(--accent-teal)',
                            color: 'var(--rich-black)',
                            fontFamily: 'var(--heading-font)',
                            fontWeight: 600,
                            padding: '10px 24px',
                            borderRadius: '4px',
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'var(--accent-teal)',
                                transform: 'scale(1.05)',
                                animation: 'glowEffect 1.5s infinite',
                            },
                        }}
                    >
                        Contact Me
                    </Button>
                    
                    <Button
                        variant="outlined"
                        href="#projects"
                        size="large"
                        sx={{
                            borderColor: 'var(--accent-orange)',
                            color: 'var(--accent-orange)',
                            fontFamily: 'var(--heading-font)',
                            fontWeight: 500,
                            padding: '10px 24px',
                            borderRadius: '4px',
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: 'var(--accent-orange)',
                                backgroundColor: 'rgba(255, 126, 103, 0.1)',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        See Projects
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default WelcomeSection;