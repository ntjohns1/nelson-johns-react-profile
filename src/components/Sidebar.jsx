import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Sidebar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '120px',
        backgroundColor: 'var(--rich-black)',
        color: 'var(--vanilla)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ color: 'var(--rufous)', fontWeight: 'bold', mb: 2, textAlign:'center', marginTop: 2 }}>
          NJ
        </Typography>
        <Stack spacing={1}>
          <Button href="#about" color="inherit">About</Button>
          <Button href="#skills" color="inherit">Skills</Button>
          <Button href="#work" color="inherit">Work</Button>
          <Button href="#contact" color="inherit">Contact</Button>
        </Stack>
      </Box>
      <Box>
        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'var(--vanilla)' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com" target="_blank" sx={{ color: 'var(--vanilla)' }}>
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;