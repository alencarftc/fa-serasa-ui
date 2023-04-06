# Use an official Node.js runtime as a parent image
FROM node:16.14.0-alpine3.14 AS base

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package.json yarn.lock ./


RUN yarn install

# Install dependencies
RUN yarn build

# Copy the rest of the application code to the container
COPY . .

# Build the application using Vite
RUN npm run build

# Use a lightweight Node.js image as a parent image for the final image
FROM node:16.13.0-alpine3.14

# Set the working directory to /app
WORKDIR /app

# Copy the application code and build artifacts from the previous stage
COPY --from=base /app/dist /app
COPY --from=base /app/package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Set the command to start the server
CMD ["npm", "start"]