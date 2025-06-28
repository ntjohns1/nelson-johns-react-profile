/**
 * Admin Service API Client
 * Generated client for the Turbolessons Admin Service API
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
 * Get user data by ID
 * @param {string} id - User ID
 * @returns {Promise<Object>} Promise resolving to user data
 */
export const getUserData = async (id) => {
  return apiCall('GET', `/admin/users/${id}`, {}, 'Error fetching user data:');
};

/**
 * Get student profile by ID
 * @param {string} id - Student ID
 * @returns {Promise<Object>} Promise resolving to student profile
 */
export const getStudentProfile = async (id) => {
  return apiCall('GET', `/admin/users/profile/${id}`, {}, 'Error fetching student profile:');
};

/**
 * Get students by teacher
 * @param {string} teacher - Teacher ID or name
 * @returns {Promise<Array>} Promise resolving to an array of students
 */
export const getStudentsByTeacher = async (teacher) => {
  try {
    const response = await apiCall('GET', `/admin/users/teacher/${teacher}`, {}, 'Error fetching students by teacher:');
    
    // Format the response to match the expected structure
    return response.map(s => ({
      id: s.id,
      displayName: s.profile?.displayName,
      email: s.profile?.email,
    }));
  } catch (error) {
    console.error('Error fetching students by teacher:', error);
    throw error;
  }
};

/**
 * Create a new student
 * @param {Object} formState - Student data
 * @returns {Promise<Object>} Promise resolving to the created student
 */
export const createStudent = async (formState) => {
  return apiCall('POST', '/admin/users', formState, 'Error creating student:');
};

/**
 * Edit a student
 * @param {string} id - Student ID
 * @param {Object} formState - Updated student data
 * @returns {Promise<Object>} Promise resolving to the updated student
 */
export const editStudent = async (id, formState) => {
  return apiCall('PUT', `/admin/users/${id}`, formState, 'Error editing student:');
};

/**
 * Delete a student
 * @param {string} id - Student ID
 * @returns {Promise<Object>} Promise resolving to an empty object on success
 */
export const deleteStudent = async (id) => {
  return apiCall('DELETE', `/admin/users/${id}`, {}, 'Error deleting student:');
};
