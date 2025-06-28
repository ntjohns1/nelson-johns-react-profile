import React, { useState } from 'react';
import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import ApiSidebar from './ApiSidebar';
import ApiDocumentation from './ApiDocumentation';
import ApiPlayground from './ApiPlayground';

/**
 * Main API Documentation component
 * Displays a three-panel layout with:
 * - Left: Sidebar with expandable tabs for services/controllers
 * - Middle: Documentation for selected API method
 * - Right: "Try It" playground for testing API calls
 */
const ApiDocs = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedMethod(null); // Reset method when service changes
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Typography variant="h2" component="h1" sx={{ mb: 4, color: 'primary.main' }}>
        API Documentation
      </Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 0, 
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          height: { xs: 'auto', md: '70vh' }
        }}
      >
        {/* Left Panel - Service/Controller Sidebar */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '25%' },
            borderRight: { xs: 'none', md: '1px solid' },
            borderBottom: { xs: '1px solid', md: 'none' },
            borderColor: 'divider',
            overflowY: 'auto'
          }}
        >
          <ApiSidebar 
            selectedService={selectedService}
            selectedMethod={selectedMethod}
            onServiceSelect={handleServiceSelect}
            onMethodSelect={handleMethodSelect}
          />
        </Box>
        
        {/* Middle Panel - API Documentation */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '45%' },
            borderRight: { xs: 'none', md: '1px solid' },
            borderBottom: { xs: '1px solid', md: 'none' },
            borderColor: 'divider',
            overflowY: 'auto',
            p: 3
          }}
        >
          <ApiDocumentation 
            selectedService={selectedService}
            selectedMethod={selectedMethod}
          />
        </Box>
        
        {/* Right Panel - API Playground */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '30%' },
            overflowY: 'auto',
            p: 3
          }}
        >
          <ApiPlayground 
            selectedService={selectedService}
            selectedMethod={selectedMethod}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ApiDocs;
