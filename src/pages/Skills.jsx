import React from 'react';
// import { Box, Typography, Chip, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import  Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';

const skills = ['Java', 'Spring Boot', 'React', 'Redux Toolkit', 'Selenium', 'MongoDB', 'SQL', 'GitHub Actions'];

const Skills = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip label={skill} key={index} variant="outlined" sx={{ mb: 1 }} />
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;