export default function PrintSudoku(props) {
    
    const displaySudoku = props.board.map((row, index) => { //map the array into a board of divs
        const r = row.map((tile, i) => {
            const cName = `sudoku-tile c${i} r${index}`;
            return(
                <div className={cName} key={i}>
                    <div className="text">
                        {tile === 0 ? "" : tile}
                    </div>
                </div>
        )});
        
        return (
            <div className="sudoku-row" key={index}>
                {r}
            </div>)
    })

    return(
        <>
            {displaySudoku}
        </>
    );
}