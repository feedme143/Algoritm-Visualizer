import {Link} from 'react-router-dom';

export default function Navbar() {

    return(
        <ul className="navbar">
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/nqueens'>
                <li>N-Queens</li>
            </Link>
            <Link to='/sudoku'>
                <li>Sudoku Solver</li>
            </Link>
        </ul>
    )
}