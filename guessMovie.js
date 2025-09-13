let selectedMovieName = ""; 
let selectedMovieId ="";
let guessCount = 5;
let score = 6;
let played = 0;

function updateGameStats() {
    sessionStorage.setItem("gameStats", JSON.stringify({ score: score, played: played }));
    console.log(score,played);
}

document.addEventListener("DOMContentLoaded", () => {
    const movieData = JSON.parse(sessionStorage.getItem('selectedMovie'));
    selectedMovieName = `${movieData.Movie_Name}`;
    document.getElementById('Release_Year').textContent = `Release Year: ${movieData.Release_Year}`; 
    document.getElementById('Genre').textContent = "Genre: ???";
    document.getElementById('Run_Time').textContent = "Run Time: ???"; 
    document.getElementById('Director').textContent = "Director(s): ???"; 
    document.getElementById('Cast').textContent = "Cast: ???"; 
    document.getElementById('Plot').textContent = "Plot: ???";  
                    let hiddenTitle = movieData.Movie_Name
                    .split(' ')
                    .map(word => '-'.repeat(word.length))
                    .join(' ');  
                    document.getElementById('dashed-movie-name').textContent = `${hiddenTitle}`;

document.getElementById('guess-movie-submit').addEventListener('click',function(){
    const movieName = document.getElementById('guess-input').value.trim();
    if(movieName.toLowerCase() == selectedMovieName.toLowerCase()){
        const correctGuess = document.getElementById('guess-remaining');
        correctGuess.innerText = "Right Guess!"
        document.getElementById("result").textContent = `Correct! You earned ${score} point!`;
        document.getElementById('score').textContent = score;
        this.disabled = true;
        played++;
        console.log(played);
        updateGameStats();
    }
    else{
        const count = document.getElementById('guess-remaining');   
        switch (guessCount) {
            case 5:
                document.getElementById('Genre').textContent = `Genre: ${movieData.Genre}`; 
                guessCount--;
                score--;
                count.innerText =  `${guessCount} Guesses Remaining`;
                updateGameStats();
                break;
            case 4:
                document.getElementById('Run_Time').textContent = `Run Time: ${movieData.Run_Time}`; 
                guessCount--;
                score--;
                count.innerText =  `${guessCount} Guesses Remaining`;
                updateGameStats();
                break;
            case 3:
                document.getElementById('Director').textContent = `Director(s): ${movieData.Director}`;
                guessCount--; 
                score--;
                count.innerText =  `${guessCount} Guesses Remaining`;
                updateGameStats();
                break;
            case 2:
                document.getElementById('Cast').textContent = `Cast: ${movieData.Cast}`; 
                guessCount--;
                score--;
                count.innerText =  `${guessCount} Guesses Remaining`;
                updateGameStats();
                break;
            case 1:
                document.getElementById('Plot').textContent = `Plot: ${movieData.Plot}`; 
                guessCount--;
                score--;
                count.innerText = "Maximum guesses reached!"
                document.getElementById("result").textContent = `Wrong! The correct answer was "${movieData.name}".`;
                this.disabled = true;
                updateGameStats();
                break;
            case 0:
                break;
        }
    }
})
});

