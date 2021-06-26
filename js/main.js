import Game from "./index.js"
import GameView from "./gameView.js"
let game  = new Game();
let gameview = new GameView()
let tiles = document.querySelectorAll(".board-tile")

document.querySelector(".restart").addEventListener("click", ()=>{
    onRestart()
})

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index)
    })
})


function onTileClick(i){
game.makeMove(i)
gameview.updateBoard(game)
// game.nextTurn()
}
function onRestart () {
    game = new Game
    gameview.updateBoard(game)
    let tile = document.querySelectorAll(".board-tile")
    tile.forEach((e)=> {
        e.classList.remove("won")
    })

}