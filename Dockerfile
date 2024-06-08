# Stage 1: Build the Angular application
FROM node:20.11.1 as build

# Set the working directory
WORKDIR /app

# Set the environment variable to allow legacy OpenSSL algorithms
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy package.json and yarn.lock to leverage Docker layer caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN yarn run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Expose the port the application will run on
EXPOSE 80

# Copy the build output to Nginx's HTML directory
COPY --from=build /app/dist/scheduling-service-front /usr/share/nginx/html
