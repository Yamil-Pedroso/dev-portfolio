import React from 'react'

const Sudoku = () => {
  return (
    <div className="container">
    <h1>Sudoku</h1>
    <p>Enter the numbers of the puzzle you want solved into the table below. Use 0 for empty cells.</p>
    <p>Click the "Solve" button to see the solution.</p>
    <div className="table-wrapper">
      <img src="./thinki.jpg" alt="Sudoku" className="sudo-img" />
      <table id="puzzle"></table>
    </div>
    <div>
      <button id="solve-btn">Solve</button>
    </div>
    <p id="explain-me"></p>
  </div>
  )
}

export default Sudoku