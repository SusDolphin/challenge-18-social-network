# Social Network API

## Description
A backend API for a social network application where users can share thoughts, react to friends' thoughts, and create a friend list. Built using Express.js, MongoDB, and Mongoose ODM.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/SusDolphin/challenge-18-social-network.git
```
2. Install dependencies:
```bash
npm install
```
3. Make sure MongoDB is installed and running on your machine
4. Start the server:
```bash
npm start
```

## Usage
The server will start running on `http://localhost:3001`. You can test the API routes using Insomnia or any other API testing tool.

## API Routes

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:userId` - Update a user
- `DELETE /api/users/:userId` - Delete a user
- `POST /api/users/:userId/friends/:friendId` - Add a friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

### Thoughts
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:thoughtId` - Get single thought by ID
- `POST /api/thoughts` - Create a new thought
- `PUT /api/thoughts/:thoughtId` - Update a thought
- `DELETE /api/thoughts/:thoughtId` - Delete a thought

### Reactions
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JavaScript Date object

## License
This project is licensed under the MIT License.
