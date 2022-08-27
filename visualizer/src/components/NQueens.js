import Row from './Row'
import React from 'react'

export default function NQueens() {

    const N = 8
    let blank = []
    // Initialize the Board
    for (let i = 0; i < N; i++) {
        blank[i] = [];
        for (let j = 0; j < N; j++) 
            blank[i][j] = 0;
    }

    //save board as state var
    const [board, setBoard] = React.useState(blank)
    const [displayGrid, setDisplayGrid] = React.useState(board.map((row, index) => <Row info = {row} key = {index}/>))

    //check if Safe
    function isSafe(r, c) {
        //see if there's a queen on the left
        for (let j = 0; j < c; j++)
            if (board[r][j] === 1)
                return false;
        
        //see if there's a queen on top left diag or bot left diag
        let top = r;
        let bot = r;
        for (let j = c; j >= 0; j--) {
            console.log(board);
            //update();
            if (top >= 0) {
                if (board[top][j] === 1)
                    return false;
                top--;
            }

            if (bot < N) {
                if (board[bot][j] === 1)
                    return false;
                bot++;
            }
        }
        
        //else, return that it's safe
        return true;
    }

    //recursive backtracking function
    function nQueens(c) {
        if (c >= N) 
            return true;
        
        for (let r = 0; r < N; r++) {

            if (isSafe(r, c)) {
                setBoard(prev => {
                    prev[r][c] = 1;
                    return prev;
                });
                

                if (nQueens(c+1))
                    return true;
                
                setBoard(prev => {
                    prev[r][c] = 0;
                    return prev;
                });
            } 
        }

        return false;
    }

    function solve() {
        nQueens(0);
        update();
    }

    function update() {
        setDisplayGrid(board.map((row, index) => <Row info = {row} key = {index}/>));
    }
        
    return (
        <>
            <button onClick={solve}>Solve N-Queens</button>
            <div className = "grid">
                {displayGrid}
            </div>
        </>
    )
}