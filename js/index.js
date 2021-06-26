
export default class Game {
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null)
    }
    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O"
        } else {
            this.turn = "X"
        }
    }

    makeMove(i){
        if(this.endOfGame()){
            return
        }
        if(this.board[i]){
            return
        }
        this.board[i] = this.turn;
        let winning = this.winning()
        console.log('winner',winning)
        if(!winning){
            this.nextTurn()
        }
    }

    winning(){
        const win = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[6,4,2]
        ]

        for (const winner of win){
            const [a,b,c] = winner
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]){
                return winner
            }
            
        }
        return null
    }
    endOfGame(){
        let winning = this.winning()
        if(winning){
            return true
        }
        return false
    }
}
