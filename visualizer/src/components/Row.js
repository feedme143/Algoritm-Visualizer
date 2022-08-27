export default function Row(props) {
    const tile = props.info.map((element, index) => <div key = {index} className = "tile"><div className = "text">{element===1 ? "Q" : ""}</div></div>)

    return (
        <div className = "row">
            {tile}
        </div>
    )
}