fetch('getMovies.php')
    .then(response => response.json())
    .then(movies => {
        const randomMovie = document.getElementById('random-movie');
        movies.forEach(movie => {
            const div = document.createElement('div'); 
            div.className = "movie-box";
            const a = document.createElement('a');
            a.textContent = movie.Id; 
            a.href = "guessMovie.html"; 
            a.addEventListener('click', () => {
                sessionStorage.setItem('selectedMovie', JSON.stringify(movie));
            });
            div.appendChild(a);
            randomMovie.appendChild(div);  
        });
    })
    .catch(error => console.error('Error fetching tasks:', error));