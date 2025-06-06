sudo docker logs nelson-johns-portfolio# Docker Deployment for Nelson Johns React Profile

This document provides instructions for deploying the React application using Docker.

## Prerequisites

- Docker installed on your Linux host
- Docker Compose installed (optional, but recommended)

## Files Created for Docker Deployment

- `Dockerfile`: Multi-stage build configuration for creating an optimized production image
- `nginx/nginx.conf`: Custom Nginx configuration to handle React routing
- `.dockerignore`: Excludes unnecessary files from the Docker build context
- `docker-compose.yml`: Simplifies deployment and management of the container

## Building and Running with Docker

### Option 1: Using Docker Directly

Build the Docker image:
```bash
docker build -t nelson-johns-portfolio .
```

Run the container:
```bash
docker run -d -p 80:80 --name nelson-johns-portfolio nelson-johns-portfolio
```

### Option 2: Using Docker Compose (Recommended)

Build and start the container:
```bash
docker-compose up -d
```

Stop the container:
```bash
docker-compose down
```

## Accessing the Application

Once deployed, the application will be available at:
- http://your-server-ip (if deployed on port 80)
- http://your-server-ip:custom-port (if you modified the port in docker-compose.yml)

## Updating the Application

When you make changes to your code:

1. Build a new Docker image:
```bash
docker-compose build
```

2. Restart the container with the new image:
```bash
docker-compose up -d
```

## Troubleshooting

View container logs:
```bash
docker logs nelson-johns-portfolio
```

Or with Docker Compose:
```bash
docker-compose logs
```
