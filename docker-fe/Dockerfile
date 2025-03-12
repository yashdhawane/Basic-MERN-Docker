# Step 1: Use an official Node.js image to build the app
FROM node:20-alpine AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./ 

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your frontend files into the container
COPY . . 

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use the official Node.js image for serving the app
FROM node:20-alpine

# Step 8: Set the working directory in the container
WORKDIR /app

# Step 9: Copy the build output from the build stage to the current stage
COPY --from=build /app/dist /app/dist

# Step 10: Install a simple HTTP server to serve static files
RUN npm install -g serve

# Step 11: Expose the port that the app will run on
EXPOSE 3002

# Step 12: Use the serve package to serve the dist folder
CMD ["serve", "-s", "dist", "-l", "3002"]
