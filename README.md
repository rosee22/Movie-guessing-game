# Movie-guessing-game
Project planning & requirements gathered (game idea, scoring rules, hints progression).
 System design & architecture documented (frontend, backend, DB responsibilities and flowchart).
 Database schema created: movies table (columns: id, movie_name, release_year, genre, runtime, cast, plot, director).
 users table available (usernames stored for sessions).
 SQL script included in repo (schema + seed data).
 Frontend pages implemented:
 index.html (home page + link to start game)
 userForm.html (enter name / delete user)
 dltuser.html (delete username page)
 getMovies.html (display random movie cards)
 guessMovie.html (game play, hints, dashed title, input)
 Styles implemented in style.css (responsive-ish layout, grid for movie cards, dark theme).
 JavaScript files implemented:
 userform.js (POST username using Fetch API)
 dltuser.js (DELETE username using Fetch API)
 script.js (GET movies, display movie boxes, save selected movie to sessionStorage)
 guessMovie.js (game logic: dashed title, hint reveal order, guessing, scoring, sessionStorage for score)
 Backend PHP implemented:
 userForm.php (receive POST, insert username into DB, return JSON response)
 dltuser.php (receive DELETE, delete username, return JSON)
 getMovies.php (GET all movies and return JSON)
 Fetch API used client-side to communicate with PHP endpoints (no page reloads).
 Score calculation & hint reveal logic implemented (6 → 1 points depending on how many hints revealed).
 Session storage usage for selected movie and game stats implemented.
 Deployed to web hosting (example URL you provided).
 
