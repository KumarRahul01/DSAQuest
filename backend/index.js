import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './config/database.js';
import apiRoutes from "./routes/api.routes.js";
import noteRoutes from "./routes/notes.routes.js";
import isCheckedRoutes from "./routes/isChecked.routes.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());   // To parse incoming JSON requests

// API Routes
app.use("/api/questions", apiRoutes);

// Note Routes
app.use("/api", noteRoutes);

// Check Status Routes
app.use("/api", isCheckedRoutes);


// Database Connection
connectDB().catch((err) => {
  console.error("Error connecting to the database", err);
  process.exit(1);  // Exit the application if the DB connection fails
});


// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the database')
})

// 404 Handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


// Start server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})


// Graceful Shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  process.exit();
});