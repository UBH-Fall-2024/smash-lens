document.querySelector('#input-file').addEventListener('change', function (event) {
    const fileInput = event.target;
    const files = fileInput.files;
    alert("LOL");

    if (files.length > 0) {
        const file = files[0]; 
        alert('Selected file: ' + file.name);

        // Create a new div element for the filename
        const newDiv = document.createElement('div');
        newDiv.textContent = `Selected file: ${file.name}`;
        newDiv.classList.add('filename-display');
        document.body.appendChild(newDiv);  // Append filename to body
        
        // Assuming `SlippiGame` is imported or available in your environment
        const { SlippiGame } = require("@slippi/slippi-js");
        const game = new SlippiGame(file);
        const stats = game.getStats();

        // Convert stats to a text representation
        const statsText = JSON.stringify(stats, null, 2);  // Format stats nicely (2 spaces indentation)

        // Create a new div for the game stats
        const statsDiv = document.createElement('div');
        statsDiv.textContent = `Game Stats:\n${statsText}`;

        // Optionally, you can style this new div for the game stats
        statsDiv.classList.add('game-stats-display');
        
        // Append the stats div to the body element
        document.body.appendChild(statsDiv);
    }
});
