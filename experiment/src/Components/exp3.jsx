import '../index.css'
import React from 'react';
import {useState} from 'react'

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function Exp3({player,activePlayer1}) {
  const [board, setboard] = useState(initialGame)
  // function handleSquare(rowIndex,colIndex){
  //   setboard((prev)=>{
  //     const updatedBoard=[...initialGame.map(innerArray=>[...innerArray])];
  //     updatedBoard[rowIndex][colIndex]='x'
  //     return updatedBoard;
  //   })
  // }
  function handleSquare(rowIndex, colIndex) {
    setboard((prev) => {
      const updatedBoard = [...prev.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activePlayer1;
      return updatedBoard;
    });
    player();
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>{handleSquare(rowIndex,colIndex)}}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
    
  );
}

export default Exp3;
