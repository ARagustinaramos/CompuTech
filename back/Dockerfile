# Use an official Node runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the Docker image
COPY back/src .
# Make port 3001 available outside the container
EXPOSE 3001

# Run the app when the container launches
CMD ["node", "src/server.js"]