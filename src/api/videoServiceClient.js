/**
 * Video Service API Client
 * Generated client for the Turbolessons Video Service API
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
 * Fetch a video by ID
 * @param {string} videoId - The video ID
 * @returns {Promise<Object>} Promise resolving to a video object
 */
export const getVideo = async (videoId) => {
  return apiCall('GET', `/video/${videoId}`, {}, 'Error fetching video:');
};

/**
 * Fetch all videos
 * @returns {Promise<Array>} Promise resolving to an array of videos
 */
export const getAllVideos = async () => {
  return apiCall('GET', '/video', {}, 'Error fetching videos:');
};

/**
 * Save a new video
 * @param {Object} videoData - The video data
 * @returns {Promise<Object>} Promise resolving to the created video
 */
export const saveVideo = async (videoData) => {
  return apiCall('POST', '/video', videoData, 'Error saving video:');
};
