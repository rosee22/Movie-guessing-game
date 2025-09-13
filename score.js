document.addEventListener("DOMContentLoaded", function() {
    const scoreButton = document.getElementById("score-link");

    if (scoreButton) { // Ensure the button exists
        scoreButton.addEventListener("click", function() {
            const gameStats = JSON.parse(sessionStorage.getItem("gameStats"));
            if (gameStats) {
                document.getElementById("streak").textContent = `Score: ${gameStats.score}`;
                document.getElementById("played").textContent = `Played: ${gameStats.played}`;
            } else {
                document.getElementById("streak").textContent = "Score: 0";
                document.getElementById("played").textContent = "Played: 0";
            }
        });
    } else {
        console.error("Error: Button with ID 'scorePageButton' not found!");
    }
});
