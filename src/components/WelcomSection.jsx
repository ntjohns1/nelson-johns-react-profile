import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { NameModelCanvas } from './NameModelCanvas';

const WelcomeSection = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'var(--rich-black)',
                color: 'var(--vanilla)',
                padding: 2,
            }}
        >
            <NameModelCanvas />
            <Typography variant="subtitle1" sx={{ mb: 4, color: 'var(--dark-cyan)' }}>
                Full-Stack Developer / Test Engineer
            </Typography>
            <Button
                variant="outlined"
                href="#contact"
                sx={{
                    borderColor: 'var(--tiffany-blue)',
                    color: 'var(--tiffany-blue)',
                    '&:hover': {
                        borderColor: 'var(--dark-cyan)',
                        color: 'var(--dark-cyan)',
                    },
                }}
            >
                Contact Me!
            </Button>
        </Box>
    );
};

export default WelcomeSection;