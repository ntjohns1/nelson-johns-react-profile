import React from 'react';
// import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const Contact = () => {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out for collaboration or inquiries.
      </Typography>
      <Stack
        component="form"
        sx={{
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          mt: 4,
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" type="email" fullWidth required />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" size="large">
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;