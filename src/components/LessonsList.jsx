import React, { useState, useEffect } from 'react';
import { getAllLessons } from '../api/eventServiceClient';
import { Box, Typography, List, ListItem, ListItemText, Paper, CircularProgress, Alert } from '@mui/material';

/**
 * Component that displays a list of lesson events from the Event Service API
 */
const LessonsList = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLoading(true);
        const data = await getAllLessons();
        setLessons(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching lessons:', err);
        setError('Failed to load lessons. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  // Format date and time for display
  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return 'N/A';
    const date = new Date(dateTimeStr);
    return date.toLocaleString();
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ my: 2 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Upcoming Lessons
      </Typography>
      
      {lessons.length === 0 ? (
        <Typography variant="body1">No lessons found.</Typography>
      ) : (
        <List>
          {lessons.map((lesson) => (
            <ListItem key={lesson.id} divider>
              <ListItemText
                primary={lesson.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {`Teacher: ${lesson.teacher}`}
                    </Typography>
                    <br />
                    {`Student: ${lesson.student}`}
                    <br />
                    {`Start: ${formatDateTime(lesson.startTime)}`}
                    <br />
                    {`End: ${formatDateTime(lesson.endTime)}`}
                    <br />
                    {`Status: ${lesson.billingStatus || 'Unknown'}`}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default LessonsList;
