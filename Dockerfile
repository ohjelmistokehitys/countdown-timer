# Use an official lightweight Node.js image as the base image:
FROM node:slim

# Set working directory in container:
WORKDIR /app

# First, copy only package files to leverage Docker cache:
COPY package*.json ./

# Install dependencies in the container:
RUN npm install

# Copy the rest of the source code
COPY . ./

# Expose Vite default dev port:
EXPOSE 5173

# Default command: start Vite dev server, binding to all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# You can build & run everything with Docker Compose (see docker-compose.yml).