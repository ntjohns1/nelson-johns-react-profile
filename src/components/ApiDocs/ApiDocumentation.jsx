import React from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Divider, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper,
  Alert
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import HttpIcon from '@mui/icons-material/Http';
import DescriptionIcon from '@mui/icons-material/Description';

// Method type to color mapping
const methodColors = {
  GET: '#61affe',    // Blue
  POST: '#49cc90',   // Green
  PUT: '#fca130',    // Orange
  DELETE: '#f93e3e', // Red
  PATCH: '#50e3c2'   // Teal
};

/**
 * API Documentation component
 * Displays documentation for the selected API method
 */
const ApiDocumentation = ({ selectedService, selectedMethod }) => {
  if (!selectedService) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="body1" color="text.secondary">
          Select a service from the sidebar to view documentation
        </Typography>
      </Box>
    );
  }

  if (!selectedMethod) {
    // Show service overview
    return (
      <Box>
        <Typography variant="h4" component="h2" sx={{ mb: 2, color: 'primary.main' }}>
          {selectedService.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {selectedService.description}
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
          Available Methods
        </Typography>
        
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Method</TableCell>
                <TableCell>Path</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedService.methods.map((method) => (
                <TableRow key={method.id}>
                  <TableCell>
                    <Chip 
                      label={method.method} 
                      size="small"
                      sx={{ 
                        bgcolor: methodColors[method.method] || 'grey.500',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                      {method.path}
                    </Typography>
                  </TableCell>
                  <TableCell>{method.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  // Example response data for each method
  const getExampleResponse = () => {
    switch (selectedMethod.id) {
      case 'get-all-lessons':
        return [
          {
            id: 1,
            title: "Introduction to Piano",
            description: "Learn the basics of piano playing",
            teacher: "John Smith",
            startTime: "2025-06-15T10:00:00",
            endTime: "2025-06-15T11:00:00"
          },
          {
            id: 2,
            title: "Advanced Guitar Techniques",
            description: "Master complex guitar techniques",
            teacher: "Jane Doe",
            startTime: "2025-06-16T14:00:00",
            endTime: "2025-06-16T15:30:00"
          }
        ];
      case 'get-lesson-by-id':
        return {
          id: 1,
          title: "Introduction to Piano",
          description: "Learn the basics of piano playing",
          teacher: "John Smith",
          startTime: "2025-06-15T10:00:00",
          endTime: "2025-06-15T11:00:00",
          students: ["Alice", "Bob", "Charlie"],
          location: "Studio A"
        };
      case 'list-all-customers':
        return [
          {
            id: "cus_123456",
            name: "John Doe",
            email: "john@example.com",
            created: 1624982400
          },
          {
            id: "cus_789012",
            name: "Jane Smith",
            email: "jane@example.com",
            created: 1625068800
          }
        ];
      case 'get-all-messages':
        return [
          {
            id: "msg_123",
            sender: "teacher1",
            recipient: "student1",
            content: "Your lesson is confirmed for tomorrow",
            timestamp: "2025-06-24T15:30:00",
            read: false
          },
          {
            id: "msg_456",
            sender: "student2",
            recipient: "teacher1",
            content: "I need to reschedule my lesson",
            timestamp: "2025-06-24T14:15:00",
            read: true
          }
        ];
      case 'get-all-videos':
        return [
          {
            id: "vid_123",
            title: "Piano Basics Tutorial",
            description: "Learn the fundamentals of piano",
            url: "https://storage.example.com/videos/piano-basics.mp4",
            duration: 1800,
            teacher: "John Smith"
          },
          {
            id: "vid_456",
            title: "Guitar Chords for Beginners",
            description: "Master essential guitar chords",
            url: "https://storage.example.com/videos/guitar-chords.mp4",
            duration: 2400,
            teacher: "Jane Doe"
          }
        ];
      case 'get-user-data':
        return {
          id: "usr_123",
          username: "jsmith",
          email: "john.smith@example.com",
          role: "TEACHER",
          profile: {
            displayName: "John Smith",
            bio: "Piano instructor with 15 years of experience",
            phoneNumber: "555-123-4567"
          }
        };
      default:
        return { message: "Example response not available" };
    }
  };

  // Get parameters for the selected method
  const getParameters = () => {
    const pathParams = [];
    const queryParams = [];
    
    // Extract path parameters from the URL
    const pathParamMatches = selectedMethod.path.match(/{([^}]+)}/g);
    if (pathParamMatches) {
      pathParamMatches.forEach(match => {
        const paramName = match.replace(/{|}/g, '');
        pathParams.push({
          name: paramName,
          type: 'string',
          required: true,
          description: `The ${paramName} parameter`
        });
      });
    }
    
    // Add query parameters based on method ID
    if (selectedMethod.id === 'get-all-lessons') {
      queryParams.push({
        name: 'page',
        type: 'integer',
        required: false,
        description: 'Page number for pagination'
      }, {
        name: 'size',
        type: 'integer',
        required: false,
        description: 'Number of items per page'
      });
    }
    
    return { pathParams, queryParams };
  };

  const { pathParams, queryParams } = getParameters();
  const exampleResponse = getExampleResponse();

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Chip 
          label={selectedMethod.method} 
          size="small"
          sx={{ 
            bgcolor: methodColors[selectedMethod.method] || 'grey.500',
            color: 'white',
            fontWeight: 'bold',
            mr: 2
          }}
        />
        <Typography variant="h5" component="h2">
          {selectedMethod.name}
        </Typography>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Endpoint
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.100' }}>
          <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
            {selectedMethod.path}
          </Typography>
        </Paper>
      </Box>
      
      {/* Parameters Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <DescriptionIcon sx={{ mr: 1 }} />
          Parameters
        </Typography>
        
        {pathParams.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Path Parameters
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Required</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pathParams.map((param) => (
                    <TableRow key={param.name}>
                      <TableCell>{param.name}</TableCell>
                      <TableCell>{param.type}</TableCell>
                      <TableCell>{param.required ? 'Yes' : 'No'}</TableCell>
                      <TableCell>{param.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        
        {queryParams.length > 0 && (
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Query Parameters
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Required</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {queryParams.map((param) => (
                    <TableRow key={param.name}>
                      <TableCell>{param.name}</TableCell>
                      <TableCell>{param.type}</TableCell>
                      <TableCell>{param.required ? 'Yes' : 'No'}</TableCell>
                      <TableCell>{param.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        
        {pathParams.length === 0 && queryParams.length === 0 && (
          <Alert severity="info">This endpoint does not require any parameters.</Alert>
        )}
      </Box>
      
      {/* Response Section */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <CodeIcon sx={{ mr: 1 }} />
          Response
        </Typography>
        
        <Paper 
          variant="outlined" 
          sx={{ 
            p: 2, 
            bgcolor: '#272822', 
            borderRadius: 1,
            overflowX: 'auto'
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              fontFamily: 'monospace',
              color: '#f8f8f2',
              whiteSpace: 'pre-wrap'
            }}
          >
            {JSON.stringify(exampleResponse, null, 2)}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ApiDocumentation;
