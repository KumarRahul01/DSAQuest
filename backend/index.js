import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './config/database.js';
import questionsPathRoutes from "./routes/questionsPath.routes.js";
import noteRoutes from "./routes/notes.routes.js";
import questionStateRoutes from './routes/questionState.routes.js';
import { binarySearchTreeQuesModel, bitManipulationQuesModel, dpQuesModel, graphQuesModel, heapsAndHashingQuesModel, segmentTreesQuesModel, triesQuesModel } from './models/questionsPath.model.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());   // To parse incoming JSON requests

// API Routes
app.use("/api", questionsPathRoutes);

// Note Routes
app.use("/api", noteRoutes);

// Check Status Routes
app.use("/api", questionStateRoutes);

const segmentTreeQuestions = [
    {
        quesId: 1,
        tag: "Segment Trees",
        question: "Range Sum Query - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
        status: false
    },
    {
        quesId: 2,
        tag: "Segment Trees",
        question: "Range Minimum Query",
        difficulty: "Medium",
        link: "https://cp-algorithms.com/sequences/rmq.html",
        status: false
    },
    {
        quesId: 3,
        tag: "Segment Trees",
        question: "Range Sum Query - Mutable ",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
        status: false
    },
    {
        quesId: 4,
        tag: "Segment Trees",
        question: "Create Sorted Array through Instructions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/create-sorted-array-through-instructions/",
        status: false
    },
    {
        quesId: 5,
        tag: "Segment Trees",
        question: "Count of Range Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-range-sum/",
        status: false
    },
    {
        quesId: 6,
        tag: "Segment Trees",
        question: "Count of Smaller Numbers After Self ",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
        status: false
    },
]


// TO piush questions on database
// connectDB().then(() => modlename.insertMany(questionArray));

// Database Connection
connectDB().catch((err) => {
  console.error("Error connecting to the database", err);
  process.exit(1);  // Exit the application if the DB connection fails
});


// Home Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the database' });
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