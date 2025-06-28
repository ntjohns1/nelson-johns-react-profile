import React, { useState } from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon,
  Collapse,
  Typography,
  Divider
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ApiIcon from '@mui/icons-material/Api';
import HttpIcon from '@mui/icons-material/Http';
import CodeIcon from '@mui/icons-material/Code';

// Service definitions with their methods
const apiServices = [
  {
    id: 'event-service',
    name: 'Event Service',
    description: 'API for lesson events',
    methods: [
      { id: 'get-all-lessons', name: 'Get All Lessons', method: 'GET', path: '/api/lessons' },
      { id: 'get-lesson-by-id', name: 'Get Lesson By ID', method: 'GET', path: '/api/lessons/{id}' },
      { id: 'get-lessons-by-teacher', name: 'Get Lessons By Teacher', method: 'GET', path: '/api/lessons/teacher/{teacher}' }
    ]
  },
  {
    id: 'payment-service',
    name: 'Payment Service',
    description: 'API for payment processing',
    methods: [
      { id: 'list-all-customers', name: 'List All Customers', method: 'GET', path: '/api/payments/customer' },
      { id: 'get-customer', name: 'Get Customer', method: 'GET', path: '/api/payments/customer/{id}' },
      { id: 'create-customer', name: 'Create Customer', method: 'POST', path: '/api/payments/customer' },
      { id: 'list-all-invoices', name: 'List All Invoices', method: 'GET', path: '/api/payments/invoice' },
      { id: 'get-invoice', name: 'Get Invoice', method: 'GET', path: '/api/payments/invoice/{id}' }
    ]
  },
  {
    id: 'message-service',
    name: 'Message Service',
    description: 'API for messaging and notifications',
    methods: [
      { id: 'get-all-messages', name: 'Get All Messages', method: 'GET', path: '/api/messages' },
      { id: 'get-message-by-id', name: 'Get Message By ID', method: 'GET', path: '/api/messages/{id}' },
      { id: 'get-messages-by-sender', name: 'Get Messages By Sender', method: 'GET', path: '/api/messages/sender/{sender}' }
    ]
  },
  {
    id: 'video-service',
    name: 'Video Service',
    description: 'API for video streaming',
    methods: [
      { id: 'get-all-videos', name: 'Get All Videos', method: 'GET', path: '/api/video' },
      { id: 'get-video-by-id', name: 'Get Video By ID', method: 'GET', path: '/api/video/{videoId}' },
      { id: 'save-video', name: 'Save Video', method: 'POST', path: '/api/video' }
    ]
  },
  {
    id: 'admin-service',
    name: 'Admin Service',
    description: 'API for user management',
    methods: [
      { id: 'get-user-data', name: 'Get User Data', method: 'GET', path: '/api/admin/users/{id}' },
      { id: 'get-student-profile', name: 'Get Student Profile', method: 'GET', path: '/api/admin/users/profile/{id}' },
      { id: 'get-students-by-teacher', name: 'Get Students By Teacher', method: 'GET', path: '/api/admin/users/teacher/{teacher}' }
    ]
  }
];

// Method type to color mapping
const methodColors = {
  GET: '#61affe',    // Blue
  POST: '#49cc90',   // Green
  PUT: '#fca130',    // Orange
  DELETE: '#f93e3e', // Red
  PATCH: '#50e3c2'   // Teal
};

/**
 * API Sidebar component
 * Displays expandable tabs for services and their methods
 */
const ApiSidebar = ({ selectedService, selectedMethod, onServiceSelect, onMethodSelect }) => {
  const [openServices, setOpenServices] = useState({});

  const handleServiceClick = (serviceId) => {
    setOpenServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
    
    const service = apiServices.find(s => s.id === serviceId);
    onServiceSelect(service);
  };

  const handleMethodClick = (serviceId, method) => {
    const service = apiServices.find(s => s.id === serviceId);
    onServiceSelect(service);
    onMethodSelect(method);
  };

  return (
    <Box sx={{ height: '100%', bgcolor: 'background.paper' }}>
      <Typography 
        variant="h6" 
        sx={{ 
          p: 2, 
          bgcolor: 'primary.main', 
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        API Services
      </Typography>
      
      <List component="nav" sx={{ p: 0 }}>
        {apiServices.map((service) => (
          <React.Fragment key={service.id}>
            <ListItem disablePadding>
              <ListItemButton 
                onClick={() => handleServiceClick(service.id)}
                selected={selectedService?.id === service.id && !selectedMethod}
                sx={{ 
                  '&.Mui-selected': { 
                    bgcolor: 'primary.light',
                    '&:hover': { bgcolor: 'primary.light' }
                  }
                }}
              >
                <ListItemIcon>
                  <ApiIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary={service.name} 
                  primaryTypographyProps={{ fontWeight: 'medium' }}
                />
                {openServices[service.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            
            <Collapse in={openServices[service.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {service.methods.map((method) => (
                  <ListItemButton 
                    key={method.id}
                    sx={{ 
                      pl: 4,
                      '&.Mui-selected': { 
                        bgcolor: 'primary.light',
                        '&:hover': { bgcolor: 'primary.light' }
                      }
                    }}
                    selected={selectedMethod?.id === method.id}
                    onClick={() => handleMethodClick(service.id, method)}
                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <Box 
                        sx={{ 
                          bgcolor: methodColors[method.method] || 'grey.500',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: '0.7rem',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: '40px'
                        }}
                      >
                        {method.method}
                      </Box>
                    </ListItemIcon>
                    <ListItemText 
                      primary={method.name}
                      primaryTypographyProps={{ 
                        fontSize: '0.9rem',
                        noWrap: true
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ApiSidebar;
