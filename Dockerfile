# Use a lightweight Node image
FROM node:18.15.0-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Use a minimal nginx image for serving the app
FROM nginx:alpine AS release

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
