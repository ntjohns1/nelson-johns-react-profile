/**
 * Message Service API Client
 * Generated client for the Turbolessons Message Service API
 */

// For local development with Vite proxy, we use relative URLs
// In production, we can set VITE_API_BASE_URL to the absolute URL if needed
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Generic API call function
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request payload (for POST, PUT)
 * @param {string} errorPrefix - Error message prefix
 * @returns {Promise<Object>} Promise resolving to response data
 */
const apiCall = async (method, endpoint, data = {}, errorPrefix = 'API Error:') => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    };

    if (method !== 'GET' && Object.keys(data).length > 0) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}/api${endpoint}`, options);
    
    if (!response.ok) {
      throw new Error(`${errorPrefix} ${response.statusText}`);
    }
    
    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return {};
  } catch (error) {
    console.error(`${errorPrefix}`, error);
    throw error;
  }
};

/**
 * Fetch all messages
 * @returns {Promise<Array>} Promise resolving to an array of messages
 */
export const getAllMessages = async () => {
  return apiCall('GET', '/messages', {}, 'Error fetching messages:');
};

/**
 * Fetch a message by ID
 * @param {string} id - The message ID
 * @returns {Promise<Object>} Promise resolving to a message object
 */
export const getMessageById = async (id) => {
  return apiCall('GET', `/messages/${id}`, {}, 'Error fetching message:');
};

/**
 * Fetch messages by sender
 * @param {string} sender - The sender ID
 * @returns {Promise<Array>} Promise resolving to an array of messages
 */
export const getMessagesBySender = async (sender) => {
  return apiCall('GET', `/messages/sender/${sender}`, {}, 'Error fetching messages by sender:');
};

/**
 * Fetch messages by recipient
 * @param {string} recipient - The recipient ID
 * @returns {Promise<Array>} Promise resolving to an array of messages
 */
export const getMessagesByRecipient = async (recipient) => {
  return apiCall('GET', `/messages/recipient/${recipient}`, {}, 'Error fetching messages by recipient:');
};

/**
 * Fetch messages between a sender and recipient
 * @param {string} sender - The sender ID
 * @param {string} recipient - The recipient ID
 * @returns {Promise<Array>} Promise resolving to an array of messages
 */
export const getMessagesBySenderAndRecipient = async (sender, recipient) => {
  return apiCall('GET', `/messages/${sender}/to/${recipient}`, {}, 'Error fetching messages between sender and recipient:');
};

/**
 * Send messages to multiple recipients
 * @param {Array} messages - Array of message objects
 * @returns {Promise<Object>} Promise resolving to the created messages
 */
export const sendMessages = async (messages) => {
  return apiCall('POST', '/messages', messages, 'Error sending messages:');
};

/**
 * Send a specific message
 * @param {string} id - The message ID
 * @param {Object} message - The message object
 * @returns {Promise<Object>} Promise resolving to the sent message
 */
export const sendMessage = async (id, message) => {
  return apiCall('POST', `/messages/${id}`, message, 'Error sending message:');
};

/**
 * Delete a message by ID
 * @param {string} id - The message ID
 * @returns {Promise<Object>} Promise resolving to an empty object on success
 */
export const deleteMessage = async (id) => {
  return apiCall('DELETE', `/messages/${id}`, {}, 'Error deleting message:');
};
