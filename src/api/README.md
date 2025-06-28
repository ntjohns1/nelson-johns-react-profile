# Event Service API Integration

This directory contains the OpenAPI specification and client for the Turbolessons Event Service API.

## Files

- `event-service-openapi.json`: The OpenAPI specification fetched from the Event Service
- `eventServiceClient.js`: JavaScript client for interacting with the Event Service API

## Usage

To use the Event Service API client in your React components:

```jsx
import { getAllLessons, getLessonById, createLesson } from '../api/eventServiceClient';

// Example: Fetch all lessons
const fetchLessons = async () => {
  try {
    const lessons = await getAllLessons();
    console.log('Lessons:', lessons);
  } catch (error) {
    console.error('Error fetching lessons:', error);
  }
};

// Example: Fetch a specific lesson
const fetchLesson = async (id) => {
  try {
    const lesson = await getLessonById(id);
    console.log('Lesson:', lesson);
  } catch (error) {
    console.error(`Error fetching lesson ${id}:`, error);
  }
};

// Example: Create a new lesson
const addLesson = async (lessonData) => {
  try {
    const newLesson = await createLesson(lessonData);
    console.log('Created lesson:', newLesson);
  } catch (error) {
    console.error('Error creating lesson:', error);
  }
};
```

## Configuration

The API client uses the following environment variables:

- `REACT_APP_API_BASE_URL`: Base URL for the API (defaults to `http://localhost:8080`)

For production deployment to nelsonjohns.com, set this environment variable to `https://nelsonjohns.com`.

## Regenerating the Client

If the API specification changes, you can update the client by:

1. Fetching the latest OpenAPI spec from the running service:
   ```bash
   curl -s http://localhost:8080/api/lessons/v3/api-docs > src/api/event-service-openapi.json
   ```

2. Update the `eventServiceClient.js` file to include any new endpoints or changes.

## Future Enhancements

- Add TypeScript support for better type safety
- Use an automated OpenAPI generator tool to create the client
- Add authentication handling
