const { SlippiGame } = require('@slippi/slippi.js')

const filePath = "C:/Users/samee/Desktop/Hackathon_2024/Game_20241014T115022.slp"

function parseSlippi(filePath) {
    const game = new SlippiGame(filePath);
    const stats = game.getStats();

    const attackCounts = stats.actionCounts.map(playerStats => ({

        playerIndex: playerStats.playerIndex,
        attackCount: playerStats.attackCount
    }));

    console.log("Parsed Counts:", attackCounts)
}
