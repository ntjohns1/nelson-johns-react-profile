/**
 * API Examples data file
 * Contains example requests and responses for each API endpoint
 */

export const apiExamples = {
  // Event Service Examples
  'get-all-lessons': {
    request: {},
    response: [
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
    ]
  },
  'get-lesson-by-id': {
    request: {
      id: "1"
    },
    response: {
      id: 1,
      title: "Introduction to Piano",
      description: "Learn the basics of piano playing",
      teacher: "John Smith",
      startTime: "2025-06-15T10:00:00",
      endTime: "2025-06-15T11:00:00",
      students: ["Alice", "Bob", "Charlie"],
      location: "Studio A"
    }
  },
  'get-lessons-by-teacher': {
    request: {
      teacher: "John Smith"
    },
    response: [
      {
        id: 1,
        title: "Introduction to Piano",
        description: "Learn the basics of piano playing",
        teacher: "John Smith",
        startTime: "2025-06-15T10:00:00",
        endTime: "2025-06-15T11:00:00"
      },
      {
        id: 3,
        title: "Piano Masterclass",
        description: "Advanced piano techniques",
        teacher: "John Smith",
        startTime: "2025-06-17T13:00:00",
        endTime: "2025-06-17T15:00:00"
      }
    ]
  },
  
  // Payment Service Examples
  'list-all-customers': {
    request: {},
    response: [
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
    ]
  },
  'get-customer': {
    request: {
      id: "cus_123456"
    },
    response: {
      id: "cus_123456",
      name: "John Doe",
      email: "john@example.com",
      created: 1624982400,
      phone: "555-123-4567",
      address: {
        line1: "123 Main St",
        city: "Anytown",
        state: "CA",
        postal_code: "12345",
        country: "US"
      }
    }
  },
  'create-customer': {
    request: {
      name: "New Customer",
      email: "customer@example.com",
      description: "A new customer"
    },
    response: {
      id: "cus_new123",
      name: "New Customer",
      email: "customer@example.com",
      description: "A new customer",
      created: 1687968000
    }
  },
  'list-all-invoices': {
    request: {},
    response: [
      {
        id: "inv_123456",
        customer: "cus_123456",
        amount_due: 5000,
        amount_paid: 5000,
        status: "paid",
        created: 1624982400
      },
      {
        id: "inv_789012",
        customer: "cus_789012",
        amount_due: 7500,
        amount_paid: 0,
        status: "open",
        created: 1625068800
      }
    ]
  },
  'get-invoice': {
    request: {
      id: "inv_123456"
    },
    response: {
      id: "inv_123456",
      customer: "cus_123456",
      customer_name: "John Doe",
      customer_email: "john@example.com",
      amount_due: 5000,
      amount_paid: 5000,
      status: "paid",
      created: 1624982400,
      lines: [
        {
          description: "Piano Lesson - 1 hour",
          amount: 5000,
          quantity: 1
        }
      ]
    }
  },
  
  // Message Service Examples
  'get-all-messages': {
    request: {},
    response: [
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
    ]
  },
  'get-message-by-id': {
    request: {
      id: "msg_123"
    },
    response: {
      id: "msg_123",
      sender: "teacher1",
      sender_name: "John Smith",
      recipient: "student1",
      recipient_name: "Alice Johnson",
      content: "Your lesson is confirmed for tomorrow",
      timestamp: "2025-06-24T15:30:00",
      read: false,
      attachments: []
    }
  },
  'get-messages-by-sender': {
    request: {
      sender: "teacher1"
    },
    response: [
      {
        id: "msg_123",
        sender: "teacher1",
        recipient: "student1",
        content: "Your lesson is confirmed for tomorrow",
        timestamp: "2025-06-24T15:30:00",
        read: false
      },
      {
        id: "msg_789",
        sender: "teacher1",
        recipient: "student3",
        content: "Please bring your sheet music",
        timestamp: "2025-06-24T15:45:00",
        read: true
      }
    ]
  },
  
  // Video Service Examples
  'get-all-videos': {
    request: {},
    response: [
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
    ]
  },
  'get-video-by-id': {
    request: {
      videoId: "vid_123"
    },
    response: {
      id: "vid_123",
      title: "Piano Basics Tutorial",
      description: "Learn the fundamentals of piano",
      url: "https://storage.example.com/videos/piano-basics.mp4",
      duration: 1800,
      teacher: "John Smith",
      uploadDate: "2025-05-15T10:30:00",
      views: 1250,
      likes: 45,
      categories: ["piano", "beginner", "tutorial"]
    }
  },
  'save-video': {
    request: {
      title: "New Video Tutorial",
      description: "A tutorial video for beginners",
      url: "https://example.com/video.mp4",
      teacher: "John Smith"
    },
    response: {
      id: "vid_new123",
      title: "New Video Tutorial",
      description: "A tutorial video for beginners",
      url: "https://example.com/video.mp4",
      teacher: "John Smith",
      uploadDate: "2025-06-26T16:56:45",
      duration: 0,
      views: 0,
      likes: 0
    }
  },
  
  // Admin Service Examples
  'get-user-data': {
    request: {
      id: "usr_123"
    },
    response: {
      id: "usr_123",
      username: "jsmith",
      email: "john.smith@example.com",
      role: "TEACHER",
      profile: {
        displayName: "John Smith",
        bio: "Piano instructor with 15 years of experience",
        phoneNumber: "555-123-4567"
      }
    }
  },
  'get-student-profile': {
    request: {
      id: "usr_456"
    },
    response: {
      id: "usr_456",
      username: "ajohnson",
      email: "alice.johnson@example.com",
      role: "STUDENT",
      profile: {
        displayName: "Alice Johnson",
        bio: "Piano student, intermediate level",
        phoneNumber: "555-987-6543",
        teacher: "John Smith",
        enrollmentDate: "2025-01-15",
        lessonsPurchased: 10,
        lessonsCompleted: 4
      }
    }
  },
  'get-students-by-teacher': {
    request: {
      teacher: "John Smith"
    },
    response: [
      {
        id: "usr_456",
        displayName: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      {
        id: "usr_789",
        displayName: "Bob Williams",
        email: "bob.williams@example.com"
      },
      {
        id: "usr_012",
        displayName: "Charlie Brown",
        email: "charlie.brown@example.com"
      }
    ]
  }
};

/**
 * Get example request and response for a specific API method
 * @param {string} methodId - The ID of the API method
 * @returns {Object} Object containing request and response examples
 */
export const getApiExample = (methodId) => {
  return apiExamples[methodId] || { request: {}, response: {} };
};

/**
 * Get parameter descriptions for a specific API method
 * @param {string} methodId - The ID of the API method
 * @returns {Object} Object containing path and query parameters
 */
export const getMethodParameters = (methodId) => {
  const pathParams = [];
  const queryParams = [];
  
  switch (methodId) {
    case 'get-lesson-by-id':
      pathParams.push({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The lesson ID'
      });
      break;
      
    case 'get-lessons-by-teacher':
      pathParams.push({
        name: 'teacher',
        type: 'string',
        required: true,
        description: 'The teacher ID or name'
      });
      break;
      
    case 'get-all-lessons':
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
      break;
      
    case 'get-customer':
      pathParams.push({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The customer ID'
      });
      break;
      
    case 'get-invoice':
      pathParams.push({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The invoice ID'
      });
      break;
      
    case 'get-message-by-id':
      pathParams.push({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The message ID'
      });
      break;
      
    case 'get-messages-by-sender':
      pathParams.push({
        name: 'sender',
        type: 'string',
        required: true,
        description: 'The sender ID or username'
      });
      break;
      
    case 'get-video-by-id':
      pathParams.push({
        name: 'videoId',
        type: 'string',
        required: true,
        description: 'The video ID'
      });
      break;
      
    case 'get-user-data':
      pathParams.push({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The user ID'
      });
      break;
      
    case 'get-student-profile':
      pathParams.push({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The student ID'
      });
      break;
      
    case 'get-students-by-teacher':
      pathParams.push({
        name: 'teacher',
        type: 'string',
        required: true,
        description: 'The teacher ID or name'
      });
      break;
  }
  
  return { pathParams, queryParams };
};
