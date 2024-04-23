import React, { useState } from "react";
import "./styles.css";
import {
  FaChessKing,
  FaChessQueen,
  FaChessRook,
  FaChessKnight,
  FaChessBishop,
  FaChessPawn,
} from "react-icons/fa";

// Inicialización del tablero con piezas representadas por caracteres
const initialSetup = [
  "R", "N", "B", "Q", "K", "B", "N", "R",
  "P", "P", "P", "P", "P", "P", "P", "P",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "p", "p", "p", "p", "p", "p", "p", "p",
  "r", "n", "b", "q", "k", "b", "n", "r"
];

const pieceIcons = {
  R: <FaChessRook className="white-piece" />,
  N: <FaChessKnight className="white-piece" />,
  B: <FaChessBishop className="white-piece" />,
  Q: <FaChessQueen className="white-piece" />,
  K: <FaChessKing className="white-piece" />,
  P: <FaChessPawn className="white-piece" />,
  r: <FaChessRook className="black-piece" />,
  n: <FaChessKnight className="black-piece" />,
  b: <FaChessBishop className="black-piece" />,
  q: <FaChessQueen className="black-piece" />,
  k: <FaChessKing className="black-piece" />,
  p: <FaChessPawn className="black-piece" />,
};

function Chess() {
  const [board, setBoard] = useState(initialSetup);
  const [selectedSquare, setSelectedSquare] = useState(-1);
  const [playerTurn, setPlayerTurn] = useState("white");

  const handleSquareClick = (index) => {
    if (selectedSquare === -1) {
      setSelectedSquare(index);
    } else {
      // Move the piece
      const newBoard = [...board];
      newBoard[index] = newBoard[selectedSquare];
      newBoard[selectedSquare] = "";
      setBoard(newBoard);
      setSelectedSquare(-1);
      setPlayerTurn(playerTurn === "white" ? "black" : "white");
    }
  };

  return (
    <div className="container">
      <h1>Play Chess!</h1>
      <div id="board" style={{ display: "flex", flexWrap: "wrap", width: "400px" }}>
        {board.map((piece, index) => (
          <div
            key={index}
            className={`square ${((index % 8) + Math.floor(index / 8)) % 2 === 0 ? "white" : "black"}`}
            onClick={() => handleSquareClick(index)}
            style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {pieceIcons[piece]}
          </div>
        ))}
      </div>
      <p>Turn: {playerTurn}</p>
    </div>
  );
}

export default Chess;
