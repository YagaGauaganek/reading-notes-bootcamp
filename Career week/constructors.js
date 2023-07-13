// console.log ("whatever")


const allPlayers = [];

//constructor FUNCTION
function Player(nameArg) {
    this.name = nameArg;
    this.highScore = 0;
    this.gamePlayed = 0;
    


this.playGame = function () {
    console.log(this.name + "played the game")
}

    allPlayers.push(this)

}

// prototype

Player.prototype.playGame = function () {
    // console.log(this.name + "played the game")

    const score = Math.floor(Math.random() * 10);

    //increase the players games played
    this.gamePlayed++;

    // increase high score
    if(score > this.highScore) {
        this.highScore = score;
    }
}

Player.prototype.read = function () {
    return this;
}

//argument
const tim = new Player("Tim")
const chris = new Player("Chris")

// console.log(Tim);

// tim.playGame();
// chris.playGame();
// console.log(allPlayers);

function allPlayersPlay() {
    for(let i = 0; i < allPlayers.length; i++) {
        allPlayers[i].playGame()
    }
}