# Use a lightweight Node image
FROM node:19.5.0-alpine AS build 

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .


# Expose port 3000 for web traffic
EXPOSE 3000

# Start the nginx server
CMD ["npm", "start"]