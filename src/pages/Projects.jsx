import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from "@mui/material/Button";


const projects = [
  {
    name: 'TurboLessons',
    description: 'A full-stack app for managing music lessons with Spring Boot, React, MongoDB, and more.',
    link: 'https://github.com/ntjohns1/turbolessons',
  },
  {
    name: 'Blue Cross Blue Shield Projects',
    description: 'ETL testing and data quality validation for centralized healthcare data.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{project.name}</Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link} target="_blank">View on GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;