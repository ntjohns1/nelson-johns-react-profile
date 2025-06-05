import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: 'Infosys',
    location: 'Raleigh, NC',
    duration: '2021 – Present',
    details: [
      'Conducted UAT testing for large-scale ETL processes, ensuring data integrity and quality compliance.',
      'Collaborated with cross-functional teams to resolve defects and optimize workflows.',
      'Authored detailed test plans and cases to validate data transformations and business requirements.',
    ],
  },
];

const Experience = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`${experience.role} - ${experience.company}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {experience.location} | {experience.duration}
                    </Typography>
                    {experience.details.map((detail, i) => (
                      <Typography component="span" variant="body2" key={i}>
                        - {detail}
                      </Typography>
                    ))}
                  </>
                }
              />
            </ListItem>
            {index < experiences.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Experience;