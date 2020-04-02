var maxdepth = 9;

function minimax(board, depth=0, alpha=-Infinity, beta=Infinity) {
    if (depth == maxdepth || board.gameover()) {
        return  board.score();
    }

    let moves = board.generatemoves();
    let best;
    let bestscore;

    if (!board.turn) {
        bestscore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            board.move(moves[i]);
            let score = minimax(board, depth+1, alpha, beta);
            board.remove(moves[i]);
            if (score > bestscore) {
                bestscore = score;
                best = i;
            }
            if (bestscore > alpha) {alpha = bestscore}
            if (alpha >= beta) {break}
        }
    } else {
        bestscore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            board.move(moves[i]);
            let score = minimax(board, depth+1, alpha, beta);
            board.remove(moves[i]);
            if (score < bestscore) {
                bestscore = score;
                best = i;
            }
            if (bestscore < beta) {beta = bestscore}
            if (alpha >= beta) {break}
        }
    }
    if (depth == 0) {
        return moves[best];
    }
    return bestscore;
}