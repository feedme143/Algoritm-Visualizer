import Print from './Print'
import React from 'react'

export default function NQueens() {

    const N = 4;
    let board = [];
    // Initialize the Board
    for (let i = 0; i < N; i++) {
        board[i] = [];
        for (let j = 0; j < N; j++) 
            board[i][j] = 0;
    }

    // Initialize what we will display on the screen as a state var
    const [displayGrid, setDisplayGrid] = React.useState(<Print stack = {[]} boardSize = {N}/>)
    const [slider, setSlider] = React.useState(1)

    let running = false; //bool that holds weather the alg is running or not

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

    //iterative function
    async function nQueens() {
        running = true;
        let stack = [];
        
        let r = 0;
        let c = 0;
        
        while (c < N) {
            while (r < N) {
    
                if (isSafe(r, c)) {
                    //console.log(board);
                    stack.push([r,c]);
                    board[r][c] = 1;
                    // setBoard(prev => {
                    //     prev[r][c] = 1;
                    //     return prev;
                    // });
                    if (slider > 1)
                        await new Promise(resolve => setTimeout(resolve, slider));
                    update(stack);
                    r = 0;
                    c++;
                    break;
                }
                
                r++;
            } if (r===N) {
                const temp = stack.pop();
                r = temp ? temp[0] : 0;
                c = temp ? temp[1] : 0;
                board[r][c]=0;
                // setBoard(prev => {
                //     prev[r][c] = 0;
                //     return prev;
                // });
                r++;
            }

            running = false;
        }

        console.log(board)
    }
    //recursive backtracking function
    // function nQueens(c) {
    //     if (c >= N) 
    //         return true;
        
    //     for (let r = 0; r < N; r++) {

    //         if (isSafe(r, c)) {
    //             setBoard(prev => {
    //                 prev[r][c] = 1;
    //                 return prev;
    //             });
                

    //             if (nQueens(c+1))
    //                 return true;
                
    //             setBoard(prev => {
    //                 prev[r][c] = 0;
    //                 return prev;
    //             });
    //         } 
    //     }

    //     return false;
    // }

    function solve() {
        nQueens();
    }

    function update(s) {
        setDisplayGrid(<Print stack = {s} boardSize = {N}/>);
    }

    function reset() {
        if (running)
            return
        //reset the board
        for (let i = 0; i < N; i++) {
            board[i] = [];
            for (let j = 0; j < N; j++) 
                board[i][j] = 0;
        }

        update([]);
    }

    return (
        <div className = "content">
            <div className = "buttons">
                <button onClick={solve}>Solve N-Queens</button>
                <button onClick={reset}>Reset</button>
                <input type="range" min="1" max="100" value={slider} onChange={(e) => setSlider(e.target.value)}/>
            </div>
            <div className = "grid">
                {displayGrid}
            </div>
        </div>
    )
}