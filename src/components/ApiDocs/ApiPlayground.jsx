import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Paper, 
  CircularProgress,
  Alert,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';

// Import API clients
import * as eventServiceClient from '../../api/eventServiceClient';
import * as paymentServiceClient from '../../api/paymentServiceClient';
import * as messageServiceClient from '../../api/messageServiceClient';
import * as videoServiceClient from '../../api/videoServiceClient';
import * as adminServiceClient from '../../api/adminServiceClient';

/**
 * API Playground component
 * Provides a "Try It" interface for testing API calls
 */
const ApiPlayground = ({ selectedService, selectedMethod }) => {
  const [paramValues, setParamValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [requestBody, setRequestBody] = useState('{}');

  if (!selectedService || !selectedMethod) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="body1" color="text.secondary">
          Select a method to try it out
        </Typography>
      </Box>
    );
  }

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
  
  // Get example request body for POST/PUT methods
  const getExampleRequestBody = () => {
    switch (selectedMethod.id) {
      case 'create-customer':
        return JSON.stringify({
          name: "New Customer",
          email: "customer@example.com",
          description: "A new customer"
        }, null, 2);
      case 'save-video':
        return JSON.stringify({
          title: "New Video Tutorial",
          description: "A tutorial video for beginners",
          url: "https://example.com/video.mp4",
          teacher: "John Smith"
        }, null, 2);
      default:
        return '{}';
    }
  };

  // Handle parameter value changes
  const handleParamChange = (paramName, value) => {
    setParamValues(prev => ({
      ...prev,
      [paramName]: value
    }));
  };

  // Handle request body changes
  const handleRequestBodyChange = (event) => {
    setRequestBody(event.target.value);
  };

  // Execute API call
  const handleTryIt = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    
    try {
      let result;
      
      // Replace path parameters in the URL
      let endpoint = selectedMethod.path;
      pathParams.forEach(param => {
        endpoint = endpoint.replace(`{${param.name}}`, paramValues[param.name] || '');
      });
      
      // Build query string for query parameters
      const queryString = queryParams
        .filter(param => paramValues[param.name])
        .map(param => `${param.name}=${encodeURIComponent(paramValues[param.name])}`)
        .join('&');
        
      if (queryString) {
        endpoint += `?${queryString}`;
      }
      
      // Execute the appropriate API call based on the selected service and method
      switch (selectedService.id) {
        case 'event-service':
          if (selectedMethod.id === 'get-all-lessons') {
            result = await eventServiceClient.getAllLessons();
          } else if (selectedMethod.id === 'get-lesson-by-id' && paramValues.id) {
            result = await eventServiceClient.getLessonById(paramValues.id);
          } else if (selectedMethod.id === 'get-lessons-by-teacher' && paramValues.teacher) {
            result = await eventServiceClient.getLessonsByTeacher(paramValues.teacher);
          }
          break;
          
        case 'payment-service':
          if (selectedMethod.id === 'list-all-customers') {
            result = await paymentServiceClient.getAllCustomers();
          } else if (selectedMethod.id === 'get-customer' && paramValues.id) {
            result = await paymentServiceClient.getCustomer(paramValues.id);
          } else if (selectedMethod.id === 'create-customer') {
            const customerData = JSON.parse(requestBody);
            result = await paymentServiceClient.createCustomer(customerData);
          } else if (selectedMethod.id === 'list-all-invoices') {
            result = await paymentServiceClient.getAllInvoices();
          } else if (selectedMethod.id === 'get-invoice' && paramValues.id) {
            result = await paymentServiceClient.getInvoice(paramValues.id);
          }
          break;
          
        case 'message-service':
          if (selectedMethod.id === 'get-all-messages') {
            result = await messageServiceClient.getAllMessages();
          } else if (selectedMethod.id === 'get-message-by-id' && paramValues.id) {
            result = await messageServiceClient.getMessageById(paramValues.id);
          } else if (selectedMethod.id === 'get-messages-by-sender' && paramValues.sender) {
            result = await messageServiceClient.getMessagesBySender(paramValues.sender);
          }
          break;
          
        case 'video-service':
          if (selectedMethod.id === 'get-all-videos') {
            result = await videoServiceClient.getAllVideos();
          } else if (selectedMethod.id === 'get-video-by-id' && paramValues.videoId) {
            result = await videoServiceClient.getVideoById(paramValues.videoId);
          } else if (selectedMethod.id === 'save-video') {
            const videoData = JSON.parse(requestBody);
            result = await videoServiceClient.saveVideo(videoData);
          }
          break;
          
        case 'admin-service':
          if (selectedMethod.id === 'get-user-data' && paramValues.id) {
            result = await adminServiceClient.getUserData(paramValues.id);
          } else if (selectedMethod.id === 'get-student-profile' && paramValues.id) {
            result = await adminServiceClient.getStudentProfile(paramValues.id);
          } else if (selectedMethod.id === 'get-students-by-teacher' && paramValues.teacher) {
            result = await adminServiceClient.getStudentsByTeacher(paramValues.teacher);
          }
          break;
          
        default:
          throw new Error('Service not implemented');
      }
      
      setResponse(result);
    } catch (err) {
      console.error('API call error:', err);
      setError(err.message || 'An error occurred while making the API call');
    } finally {
      setLoading(false);
    }
  };

  // Check if all required parameters have values
  const allRequiredParamsHaveValues = () => {
    return pathParams
      .filter(param => param.required)
      .every(param => paramValues[param.name]);
  };

  // Determine if the method requires a request body
  const requiresRequestBody = ['POST', 'PUT', 'PATCH'].includes(selectedMethod.method);
  
  // Initialize request body if needed
  React.useEffect(() => {
    if (requiresRequestBody) {
      setRequestBody(getExampleRequestBody());
    }
  }, [selectedMethod.id]);

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Try It!
      </Typography>
      
      {/* Parameters Form */}
      {(pathParams.length > 0 || queryParams.length > 0) && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Parameters
          </Typography>
          
          {/* Path Parameters */}
          {pathParams.map(param => (
            <TextField
              key={param.name}
              label={`${param.name}${param.required ? ' *' : ''}`}
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              value={paramValues[param.name] || ''}
              onChange={(e) => handleParamChange(param.name, e.target.value)}
              required={param.required}
              helperText={param.description}
            />
          ))}
          
          {/* Query Parameters */}
          {queryParams.map(param => (
            <TextField
              key={param.name}
              label={`${param.name}${param.required ? ' *' : ''}`}
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              value={paramValues[param.name] || ''}
              onChange={(e) => handleParamChange(param.name, e.target.value)}
              required={param.required}
              helperText={param.description}
            />
          ))}
        </Box>
      )}
      
      {/* Request Body */}
      {requiresRequestBody && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Request Body
          </Typography>
          <TextField
            multiline
            rows={8}
            fullWidth
            variant="outlined"
            size="small"
            value={requestBody}
            onChange={handleRequestBodyChange}
            InputProps={{
              style: { 
                fontFamily: 'monospace',
                fontSize: '0.875rem'
              }
            }}
          />
        </Box>
      )}
      
      {/* Execute Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <PlayArrowIcon />}
          onClick={handleTryIt}
          disabled={loading || !allRequiredParamsHaveValues()}
          fullWidth
        >
          {loading ? 'Executing...' : 'Execute'}
        </Button>
      </Box>
      
      {/* Response Section */}
      {(response || error) && (
        <Box>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="subtitle2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <CodeIcon sx={{ mr: 1 }} />
            Response
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          {response && (
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
                {JSON.stringify(response, null, 2)}
              </Typography>
            </Paper>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ApiPlayground;
