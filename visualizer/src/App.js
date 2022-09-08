import NQueens from './components/NQueens';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sudoku from './components/Sudoku';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<div>This is the Home Page!</div>}/>
          <Route path='/nqueens' element={<NQueens/>}/>
          <Route path='/sudoku' element={<div><Sudoku/></div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
