# Use Node.js image to build the frontend
FROM node:20

# Set the working directory
WORKDIR /my-react-app/

# Install dependencies
COPY package*.json .

RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the frontend runs
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev"]



