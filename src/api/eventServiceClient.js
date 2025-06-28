/**
 * Event Service API Client
 * Generated client for the Turbolessons Event Service API
 */

// For local development with Vite proxy, we use relative URLs
// In production, we can set VITE_API_BASE_URL to the absolute URL if needed
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Fetch all lesson events
 * @returns {Promise<Array>} Promise resolving to an array of lesson events
 */
export const getAllLessons = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/lessons`);
    if (!response.ok) {
      throw new Error(`Error fetching lessons: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch lessons:', error);
    throw error;
  }
};

/**
 * Fetch a lesson event by ID
 * @param {number} id - The lesson event ID
 * @returns {Promise<Object>} Promise resolving to a lesson event object
 */
export const getLessonById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/lessons/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching lesson ${id}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch lesson ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch lesson events by teacher
 * @param {string} teacher - The teacher's name
 * @returns {Promise<Array>} Promise resolving to an array of lesson events
 */
export const getLessonsByTeacher = async (teacher) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/lessons/teacher/${encodeURIComponent(teacher)}`);
    if (!response.ok) {
      throw new Error(`Error fetching lessons for teacher ${teacher}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch lessons for teacher ${teacher}:`, error);
    throw error;
  }
};

/**
 * Create a new lesson event
 * @param {Object} lesson - The lesson event object to create
 * @returns {Promise<Object>} Promise resolving to the created lesson event
 */
export const createLesson = async (lesson) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/lessons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lesson),
    });
    if (!response.ok) {
      throw new Error(`Error creating lesson: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to create lesson:', error);
    throw error;
  }
};

/**
 * Update an existing lesson event
 * @param {number} id - The lesson event ID
 * @param {Object} lesson - The updated lesson event object
 * @returns {Promise<void>}
 */
export const updateLesson = async (id, lesson) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/lessons/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lesson),
    });
    if (!response.ok) {
      throw new Error(`Error updating lesson ${id}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Failed to update lesson ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a lesson event
 * @param {number} id - The lesson event ID
 * @returns {Promise<void>}
 */
export const deleteLesson = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/lessons/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting lesson ${id}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Failed to delete lesson ${id}:`, error);
    throw error;
  }
};
