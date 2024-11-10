const { ipcRenderer } = require('electron');
const { SlippiGame } = require("@slippi/slippi-js");

// ! define filePath 

let attackCounts = null;

function parseMoveInstances(filePath){
    // Extract attackCount data for each player

    const game = new SlippiGame(filePath);
    const stats = game.getStats();

    if(!stats || !stats.actionCounts){
        console.log("No valid data available.");
        return null;
    }

    return stats.actionCounts.map(playerStats => ({
        playerIndex: playerStats.playerIndex,
        attackCount: playerStats.attackCount,
        grabCount: playerStats.grabCount
    }));
}
// player 1 attack variables
let p1_jab1 = attackCounts[0].attackCount.jab1;
let p1_jab2 = attackCounts[0].attackCount.jab2;
let p1_jab3 = attackCounts[0].attackCount.jab3;
let p1_jabm = attackCounts[0].attackCount.jabm;
let p1_dash = attackCounts[0].attackCount.dash;
let p1_ftilt = attackCounts[0].attackCount.ftilt;
let p1_utilt = attackCounts[0].attackCount.utilt;
let p1_dtilt = attackCounts[0].attackCount.dtilt;
let p1_fsmash = attackCounts[0].attackCount.fsmash;
let p1_usmash = attackCounts[0].attackCount.usmash;
let p1_dsmash = attackCounts[0].attackCount.dsmash;
let p1_nair = attackCounts[0].attackCount.nair;
let p1_fair = attackCounts[0].attackCount.fair;
let p1_bair = attackCounts[0].attackCount.bair;
let p1_uair = attackCounts[0].attackCount.uair;
let p1_dair = attackCounts[0].attackCount.dair;

// player 2 attack variables 
let p2_jab1 = attackCounts[1].attackCount.jab1;
let p2_jab2 = attackCounts[1].attackCount.jab2;
let p2_jab3 = attackCounts[1].attackCount.jab3;
let p2_jabm = attackCounts[1].attackCount.jabm;
let p2_dash = attackCounts[1].attackCount.dash;
let p2_ftilt = attackCounts[1].attackCount.ftilt;
let p2_utilt = attackCounts[1].attackCount.utilt;
let p2_dtilt = attackCounts[1].attackCount.dtilt;
let p2_fsmash = attackCounts[1].attackCount.fsmash;
let p2_usmash = attackCounts[1].attackCount.usmash;
let p2_dsmash = attackCounts[1].attackCount.dsmash;
let p2_nair = attackCounts[1].attackCount.nair;
let p2_fair = attackCounts[1].attackCount.fair;
let p2_bair = attackCounts[1].attackCount.bair;
let p2_uair = attackCounts[1].attackCount.uair;
let p2_dair = attackCounts[1].attackCount.dair;




chart = document.getElementById('movesChart').getContext('2d');

// create chart instance 
if(!attackCounts) {
console.log("Error");
}
else{
function renderChart(playerIndex){
    const playerData = attackCounts[playerIndex];
    const moveNames = Object.keys(playerData.attackCount);
    const moveCounts = Object.values(playerData.attackCount);

    const chartContext = document.getElementById('movesChart').getContext('2d');

    if (window.movesChart){
        movesChart.destroy();
    }

    window.movesChart = new Chart(chart, {
        type:'bar',
        data:{
            labels:moveNames,
            datasets: [{
                label:'Move Usage Frequency',
                data: moveCounts,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor:'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]

        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Event listener for character selection
document.getElementById("character-select").addEventListener("change", (event) => {
    const playerIndex = parseInt(event.target.value, 10);
    renderChart(playerIndex);
});

// Initial render for Player 1
renderChart(0);
}
