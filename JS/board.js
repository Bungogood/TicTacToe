class board {
    constructor (grid=[0,0,0,0,0,0,0,0,0], turn=true) {
        this.grid = grid;
        this.turn = turn;
    }

    valid(i) {
        return this.grid[i] == 0;
    }

    move(i) {
        this.grid[i] = this.turn ? 1 : -1;
        this.turn = !this.turn;
    }

    remove(i) {
        this.grid[i] = 0;
        this.turn = !this.turn;
    }

    show() {
        for (let i = 0; i < this.grid.length; i++) {
            cells[i].innerText = chars[this.grid[i] + 1];
        }
    }

    checkcon() {
        for (let i = 0; i < vic.length; i++) {
            if (this.grid[vic[i][0]] != 0 && this.grid[vic[i][0]] == this.grid[vic[i][1]] && this.grid[vic[i][1]] == this.grid[vic[i][2]]) {
                return i;
            }
        }
        return null;
    }

    checkwin(player) {
        let i = this.checkcon()
        if (i == null) {return false}
        return player && this.grid[vic[i][0]] == 1 || !player && this.grid[vic[i][0]] == -1;
    }

    checkdraw() {
        let count = 0;
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i] == 0) {
                count++
            }
        }
        return count == 0;
    }

    gameover() {
        return this.checkdraw() || this.checkwin(true) || this.checkwin(false)
    }

    score() {
        if (this.checkwin(true)) {return -10}
        else if (this.checkwin(false)) {return 10}
        else {return 0}
    }

    generatemoves() {
        let moves = [];
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i] == 0) {
                moves.push(i);
            }
        }
        return moves;
    }
}