# Movie-guessing-game
📌 Project Overview
1. Movie Guesser is a full-stack web-based game where players test their movie knowledge by guessing film titles based on progressive hints.
2. Players start by entering their name to join the game.
3. A random movie is selected from the database.
4. The title is hidden with dashes, and hints (year, genre, runtime, director, cast, plot) are revealed step by step.
The scoring system rewards accuracy:
✅ Correct on first try → 6 points

⚡ Each additional hint → score reduced by 1

Scores and game progress are displayed instantly without reloading the page, thanks to JavaScript Fetch API.

Players can also delete their profile from the system if they want.

This project demonstrates full-stack web development, combining frontend design, game logic, backend server handling, and database operations.

🚀 Features

🎮 Interactive Gameplay – Progressive hints reveal with decreasing score.

📝 User Management – Enter or delete player name.

🎲 Random Movie Selection – Movie chosen dynamically from database.

📊 Scoring System – Real-time updates based on guess accuracy.

🔄 Asynchronous Communication – Fetch API ensures smooth server interaction without reloading.

📂 Persistent Data Storage – MySQL database for storing movies and users.

🌐 Deployed Web Application – Hosted and accessible via URL.

✅ Tasks Completed
Planning & Setup

 Defined game idea, flow, and scoring system.

 Designed database schema (movies + users tables).

 Documented system design and architecture.

Database

 Created movies table (columns: id, movie_name, release_year, genre, runtime, cast, plot, director).

 Inserted sample movie records.

 Created users table to store player names.

Frontend

 Built HTML pages:

index.html – Home page

userForm.html – Enter name

dltuser.html – Delete user

getMovies.html – Random movie display

guessMovie.html – Gameplay screen

 Designed CSS styles for dark theme, grids, and forms.

 Implemented JavaScript files:

userform.js – POST username

dltuser.js – DELETE username

script.js – GET movies & display

guessMovie.js – Game logic, hints, score

Backend

 Created PHP scripts:

userForm.php – Insert player name

dltuser.php – Delete player name

getMovies.php – Fetch movies as JSON

 Implemented HTTP methods (GET, POST, DELETE).

 Enabled asynchronous communication with Fetch API.

Deployment

 Uploaded project to hosting server.

 Tested full flow from user creation → guessing → scoring → deleting user.

🛠️ Technologies Used

Frontend:

HTML – Structure & markup

CSS – Styling & layout

JavaScript – Interactivity & Fetch API

Backend:

PHP – Server-side scripting

Fetch API – Asynchronous requests

Database:

MySQL – Storage for movies and users

Deployment:

Web hosting (Arden student server)
