class TicTacToe {

    constructor() {
        this.player = 'X';
        this.board = {
            0 : { 0 : '' , 1 : '', 2 : '' },
            1 : { 0 : '' , 1 : '', 2 : '' },
            2 : { 0 : '' , 1 : '', 2 : '' }
        };
    }

    Play(x, y) {
        this.board[x][y] = this.player;

        this.SetPlayer();

        return true;
    }

    Player(){
        return this.player;
    }

    SetPlayer(){
        this.player = this.player === 'Y' ? 'X' : 'Y';
    }

    ColumnWin(xPosition, player){
        if (this.board[xPosition][0] === player && this.board[xPosition][1] === player && this.board[xPosition][2] === player){
            return player;
        }

        if (xPosition <= 1){
            return this.ColumnWin(xPosition + 1, player);
        }

        return '';
    }

    RowWinX(yPosition){
        if (this.board[0][yPosition] === 'X' && this.board[1][yPosition] === 'X' && this.board[2][yPosition] === 'X'){
            return 'X';
        }

        if (yPosition <= 1){
            return this.RowWinX(yPosition + 1);
        }

        return '';
    }

    Winner(){
        let winner = this.ColumnWin(0, 'X');

        if (winner === ''){
            winner = this.RowWinX(0);
        }

        if (winner === '') {
            winner = this.ColumnWin(0, 'Y');
        }


        return winner;
    }
}

export default TicTacToe;