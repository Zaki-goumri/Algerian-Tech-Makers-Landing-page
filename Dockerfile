# syntax=docker/dockerfile:1

# ARG to specify the Node.js version
ARG NODE_VERSION=22.14.0

################################################################################
# Use Node.js image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages
WORKDIR /usr/src/app

################################################################################
# Stage to install production dependencies
FROM base as deps

# Copy package files first to optimize caching
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

################################################################################
# Build stage to compile the application
FROM base as build

# Copy the entire project, including source code
COPY . .

# Install development dependencies for building
RUN npm ci

# Build the application
RUN npm run build

################################################################################
# Final stage to minimize runtime image
FROM base as final

# Set environment to production
ENV NODE_ENV production

# Create and switch to a non-root user for security
USER node

# Copy package.json (to use npm commands if needed)
COPY package.json .

# Copy only production dependencies from the deps stage
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Set the working directory
WORKDIR /usr/src/app

# Ensure the dist directory exists before running the app
RUN ls -la ./dist || echo "⚠️ Warning: dist directory is missing!"

# Expose the application's port
EXPOSE 5174

# Define the command to run the application
CMD ["node", "dist/index.js"]
