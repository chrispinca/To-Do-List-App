**To-Do List App: **
This is a full-stack To-Do List web application built with React for the frontend, Express for the backend, MongoDB for data storage, and Docker for containerization. 
It allows users to add, edit, and delete tasks. The app uses a REST API to communicate between the frontend and backend, and everything is orchestrated using Docker Compose.

Features Add, update, and delete tasks.

Responsive frontend built with React. REST API developed with Express and Node.js. MongoDB used for storing task data. Containerized with Docker for easier deployment and scalability.
Technologies Used:
  - Frontend: React, Axios, Vite
  - Backend: Node.js, Express Database: MongoDB (via Mongoose)
  - Containerization: Docker, Docker Compose

Setup Instructions:

Prerequisites: 
  - Docker: Make sure you have Docker and Docker Compose installed on your machine. 
  - MongoDB Atlas: Set up a MongoDB Atlas cluster (or use a local MongoDB instance). Clone the Repository cd to-do-list-app
  - Environment Variables Create a .env file in the root folder with the following: MONGO_URI= PORT=5000 Replace with your MongoDB connection string.

Build and Run To build and run the application with Docker, execute the following command:

docker-compose up --build This will start both the frontend and backend containers. The app will be accessible at:

Frontend: http://localhost:5173 
Backend: http://localhost:5000 
Docker Usage Build and Start Containers To build and start the containers, run:

docker-compose up --build Stop Containers To stop the containers gracefully:

docker-compose down Rebuild Containers If you want to rebuild the containers:

docker-compose up --build API Endpoints The backend exposes the following REST API endpoints:

GET /tasks: Fetch all tasks POST /tasks: Add a new task PUT /tasks/ : Update an existing task DELETE /tasks/ : Delete a task

Project Structure

my-react-app/ │ ├── backend/ │ ├── Dockerfile │ ├── server.js │ ├── models/ │ ├── routes/ │ │ ├── frontend/ │ ├── Dockerfile │ ├── src/ │ │ ├── components/ │ │ ├── ToDoList.jsx │ │ ├── App.js │ │ └── index.js │ └── vite.config.js │ ├── docker-compose.yml ├── .env └── README.md
