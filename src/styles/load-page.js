document.querySelector('#input-file').addEventListener('change', function (event) {
    const fileInput = event.target;
    const files = fileInput.files;
    alert("LOL");

    if (files.length > 0) {
        const file = files[0]; 
        alert('Selected file: ' + file.name);

        // Create a new div element
        const newDiv = document.createElement('div');
        
        // Set the content of the div to the filename
        newDiv.textContent = `Selected file: ${file.name}`;

        // Optionally, you can give the div an ID or class for styling or identification
        newDiv.classList.add('filename-display');

        // Append the new div to the body element
        document.body.appendChild(newDiv);  // This is the correct way to access the body
        
        /*const { SlippiGame } = require("@slippi/slippi-js");
    const game = new SlippiGame(file);
    console.log(game.getStats());*/
    }
        alert("no");
        const SlippiGame = require('@slippi/slippi-js').SlippiGame;
    alert("y");
    const temp = "C:/Users/sindi/Downloads/Game_20241014T115022.slp";
    alert("a");
        const game = new SlippiGame(temp);
        alert("s");
        const stats = game.getStats();
        alert("z");
    
        console.log(stats);
        alert("YAY");
});
