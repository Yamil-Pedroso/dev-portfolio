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

interface SquareProps {
  piece: string;
  color: string;
}

const chessBlackPieces = [
  {
    id: 1,
    icon: <FaChessRook />,
  },
  {
    id: 2,
    icon: <FaChessKnight />,
  },
  {
    id: 3,
    icon: <FaChessBishop />,
  },
  { 
    
    id: 4, 
    icon: <FaChessKing /> 
  },
  { 
    id: 5, 
    icon: <FaChessQueen /> 
  },
  { 
    id: 6, 
    icon: <FaChessPawn />
  },
];

const chesswhitePieces = [
  {
    id: 1,
    icon: <FaChessRook />,
  },
  {
    id: 2,
    icon: <FaChessKnight />,
  },
  {
    id: 3,
    icon: <FaChessBishop />,
  },
  { 
    id: 4, 
    icon: <FaChessKing /> 
  },
  { 
    id: 5, 
    icon: <FaChessQueen /> 
  },
  { 
    id: 6, 
    icon: <FaChessPawn />
  },
];



const Chess: React.FC<SquareProps> = () => {
  const [playerGo, setPlayerGo] = useState("white");
  const [board, setBoard] = useState([]);
  const [info, setInfo] = useState("");

  const blackRooks = [0, 7];
  const blackKnights = [1, 6];
  const blackBishops = [2, 5];
  const blackQueen = [3];
  const blackKing = [4];
  const blackPawsRow = [8, 9, 10, 11, 12, 13, 14, 15]

  const whiteRooks = [56, 63];
  const whiteKnights = [57, 62];
  const whiteBishops = [58, 61];
  const whiteQueen = [59];
  const whiteKing = [60];
  const whitePawsRow = [48, 49, 50, 51, 52, 53, 54, 55]

  const handleClick = (e: any) => {
    whiteRooks[0] = e.target.id;
    console.log(whiteRooks[0], e.target.id, "whiteRooks");
  }


  const createInitialBoard = () => {
    setBoard([]);
    return [];
  };

  const handleDragStart = (e: any) => {};

  function handleDragOver(e: any) {
    e.preventDefault();
  }

  function handleDragDrop(e: any) {
    e.preventDefault();
    const target = e.target;
    const piece = e.dataTransfer.getData("piece");
    checkIfValid(target, piece);
  }

  function changePlayer() {
    if (playerGo === "white") {
      setPlayerGo("black");
    } else {
      setPlayerGo("white");
    }
  }

  const checkIfValid = (target: any, piece: any) => {};

  const checkForWin = () => {};

  return (
    <div className="container">
      <h1>Play a Game!!</h1>

      <div id="board" style={{ color: "#000" }}>
        {Array(64)
          .fill(0)
          .map((square, i) => (
            <div
              key={i}
              className={`square ${
                (i + Math.floor(i / 8)) % 2 === 0 ? "beige" : "brown"
              }`}
              id={i.toString()}
            >
          {chessBlackPieces.map(piece => (
             <div 
               key={piece.id} 
               className="piece black-piece"
               id={piece.id.toString()}
               >
             
                {blackRooks.includes(i) && piece.id === 1 ? piece.icon : ""}
                {blackKnights.includes(i) && piece.id === 2 ? piece.icon : ""}
                {blackBishops.includes(i) && piece.id === 3 ? piece.icon : ""}
                {blackKing.includes(i) && piece.id === 4 ? piece.icon : ""}
                {blackQueen.includes(i) && piece.id === 5 ? piece.icon : ""}
                {blackPawsRow.includes(i) && piece.id === 6 ? piece.icon : ""}

      
              
            </div>
          ))}
           {chesswhitePieces.map(piece => (
              <div 
                key={piece.id} 
                className="piece white-piece"
                id={piece.id.toString()}
                onClick={handleClick}
                >
                  {whiteRooks.includes(i) && piece.id === 1 ? piece.icon : ""}
                  {whiteKnights.includes(i) && piece.id === 2 ? piece.icon : ""}
                  {whiteBishops.includes(i) && piece.id === 3 ? piece.icon : ""}
                  {whiteKing.includes(i) && piece.id === 4 ? piece.icon : ""}
                  {whiteQueen.includes(i) && piece.id === 5 ? piece.icon : ""}
                  {whitePawsRow.includes(i) && piece.id === 6 ? piece.icon : ""}
            
            </div>
            ))}
            </div>
          ))}
      </div>
      <div className="player-info">
        <p>
          It is<span id="player"></span>'s go.
        </p>
        <p id="info-display"></p>
      </div>
    </div>
  );
};

export default Chess;
