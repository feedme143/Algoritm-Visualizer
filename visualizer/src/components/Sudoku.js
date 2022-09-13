import PrintSudoku from "./PrintSudoku";

export default function Sudoku() {
    let board = [];
    const N = 9;

    function createBoard() { //create the random solved board
        for (let i = 0; i < 9; i++) //initialize a blank 9x9 noard
            board.push([0,0,0,0,0,0,0,0,0]);

        random3x3(0); //fill the diagonal with random 3x3s
        random3x3(3);
        random3x3(6);

        solveBoard(0,0); //solve the random board
        removeRandom(50); //remove a random amount of numbers from the solved board

        console.log(board);
    }

    function random3x3(start) { //generates a random 3x3 matrix for a submatrix in the sudoku
        let order = [1,2,3,4,5,6,7,8,9];
        order.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < 9; i++) {
            const row = start + parseInt(i/3);
            const col = start + i%3;
            board[row][col] = order[i];
        }
    }

    function solveBoard(row, col) { //solves the board, recursive and used to create a random board
        if (row === N - 1 && col === N)
            return true;

        if (col === N)
        {
            row++;
            col = 0;
        }
        
        if (board[row][col] !== 0)
            return solveBoard(row, col + 1);
 
        for(let num = 1; num < 10; num++)
            {
                
                // Check if it is safe to place
                // the num (1-9)  in the given
                // row ,col ->we move to next column
                if (isSafe(row, col, num))
                {
                    
                    /*  assigning the num in the current
                    (row,col)  position of the grid and
                    assuming our assigned num in the position
                    is correct */
                    board[row][col] = num;
        
                    // Checking for next
                    // possibility with next column
                    if (solveBoard(row, col + 1))
                        return true;
                }
                
                /* removing the assigned num , since our
                assumption was wrong , and we go for next
                assumption with diff num value   */
                board[row][col] = 0;
            }
        return false;

    }

    function isSafe(row, col, num) { //check if a certain number can be placed at a certain position
            
            // Check if we find the same num
            // in the similar row , we
            // return false
            for(let x = 0; x <= 8; x++)
                if (board[row][x] === num)
                    return false;
        
            // Check if we find the same num
            // in the similar column ,
            // we return false
            for(let x = 0; x <= 8; x++)
                if (board[x][col] === num)
                    return false;
        
            // Check if we find the same num
            // in the particular 3*3
            // matrix, we return false
            let startRow = row - row % 3,
                startCol = col - col % 3;
                
            for(let i = 0; i < 3; i++)
                for(let j = 0; j < 3; j++)
                    if (board[i + startRow][j + startCol] === num)
                        return false;
        
            return true;
    }

    function removeRandom(k) { //remove k random elements on the sudoku board
        let count = k;

        while (count > 0) {
            const rand = parseInt(Math.random() * N*N);
            const i = parseInt(rand/N);
            const j = rand%N;

            if (board[i][j] != 0) {
                board[i][j] = 0;
                count--;
            }
        }
    }


    function slowSolve() { //iterative solution that will display the solving process to the user
        const stack = [];

        while (stack) {
            const last = stack.pop();
            const row = parseInt(last/N); 
            const col = last%N;

            for (let i = board[row][col] + 1; i < 9; i++) {
                
            }
        }
    }

    createBoard();

    return(
        <div className="sudokuBoard">
            <PrintSudoku board={board}/>
        </div>
    )
}