const cells = document.querySelectorAll('.cell');
const chars = ["O", "", "X"];
const vic = [[0, 1, 2],
             [3, 4, 5],
             [6, 7, 8],
             [0, 3, 6],
             [1, 4, 7],
             [2, 5, 8],
             [0, 4, 8],
             [6, 4, 2]];

var b = new board();
var ai = true;

function setup() {
	for (let i = 0; i < 9; i++) {
        cells[i].addEventListener('click', turnClick);
    }
}

function turnClick(e) {
    i = e.target.id;
    turn(i);
}

function turn(i) {
    if (b.valid(i)) {
        b.move(i);
        if (b.gameover()) {
            if (b.checkwin(true)) {console.log("win!")}
            else if (b.checkwin(false)) {console.log("lose!")}
            else {console.log("draw!")}
            b = new board();
        } else if (ai && b.turn == false) {
            turn(minimax(b));
        }
        b.show();
    }
}

setup();