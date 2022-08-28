export default function Print(props) {
    const N = 8
    let blank = []
    // Initialize the Board
    for (let i = 0; i < N; i++) {
        blank[i] = [];
        for (let j = 0; j < N; j++) 
            blank[i][j] = 0;
    }

    for (let i = 0; i < props.stack.length; i++) {
        blank[props.stack[i][0]][props.stack[i][1]] = 1;
    }

    const display = blank.map((row,index) => {
        const displayTile = row.map((tile,index) => {
            const cName = `tile ${tile===1 ? "Q" : ""}`
            return <div key = {index} className = {cName}>{tile===1 ? "Q" : ""}</div>;
        });
        return <div key = {index} className = "row">{displayTile}</div>;
    });

    return (
        <>{display}</>
    )
}