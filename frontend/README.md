# DSAQuest

DSAQuest is a web application designed for programmers to practice Top Data Structures and Algorithms (DSA) Sheet's Questions, Track their progress, and Mark questions for later revision. 

DSAQuest provides a structured approach to mastering DSA by offering categorized questions with user-friendly features like progress tracking and bookmarking for easy revision.

## Features

- **Question Categories**: Organized DSA questions by topic (e.g., Arrays, Trees, Graphs, etc.).
- **Progress Tracking**: Track your progress for each question you solve.
- **Bookmarks**: Mark questions for later revision or focus.
- **User Authentication**: Secure login and signup functionality.
- **Responsive Design**: Works seamlessly across desktop and mobile devices.
- **Data Persistence**: User data is stored and managed efficiently, allowing users to resume from where they left off.

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for storing user data and questions)

- **Authentication**:
  - Clerk (for user signup and login)

- **Additional Libraries**:
  - react-hook-form (for handling form inputs)
  - axios (for API requests)
  - react-icons (for iconography)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- Clerk API Key (for authentication)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/DSAQuest.git
    cd DSAQuest
    ```

2. Install the dependencies for the frontend:
    ```bash
    cd client
    npm install
    ```

3. Install the dependencies for the backend:
    ```bash
    cd ../server
    npm install
    ```

4. Set up the environment variables:
    - Create a `.env` file in the `server` directory and add the following:
      ```bash
      MONGO_URI=<your-mongodb-uri>
      CLERK_API_KEY=<your-clerk-api-key>
      PORT=5000
      ```

5. Start the development server:
    ```bash
    cd server
    npm run dev
    ```

6. Start the React app:
    ```bash
    cd client
    npm start
    ```

## Folder Structure

- **client**: Contains the React.js frontend.
  - `src/`: Main source code for the React app.
  - `components/`: React components used across the app.
  - `pages/`: Pages like home, login, signup, etc.
  
- **server**: Contains the Node.js backend.
  - `routes/`: API routes for handling requests.
  - `models/`: MongoDB models for user data and DSA questions.

## Future Enhancements

- **Leaderboard**: Show user rankings based on the number of solved questions.
- **Difficulty Levels**: Add difficulty filters (easy, medium, hard) for each question.
- **Discussion Forum**: Allow users to discuss solutions and approaches for each question.
- **Custom Tests**: Allow users to create custom test sets based on selected topics.

## Contributing

If you'd like to contribute to the project, feel free to create a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License.
