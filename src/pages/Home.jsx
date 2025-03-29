import React from 'react';
// import { Box, Typography, Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Software Development Engineer in Test | Full-Stack Developer
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" href="#resume">View Resume</Button>
        <Button variant="outlined" color="primary" href="https://github.com/ntjohns1" target="_blank">GitHub</Button>
        <Button variant="outlined" color="primary" href="https://linkedin.com/in/nelson-johns" target="_blank">LinkedIn</Button>
      </Stack>
    </Box>
  );
};

export default Home;