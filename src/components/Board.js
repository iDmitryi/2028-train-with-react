import React, { useState } from 'react';

import Square from './Square';
import TopButtons from './TopButtons';

import '../style/Board.css';

const Board = ({ rows, columns }) => {
  const initialState = Array.from(Array(rows), () => Array(columns).fill(0));

  const [currentState, setCurrentState] = useState(initialState);
  // const [firstRow, setFirstRow] = useState(initialState[0]);
  const [rowNumber, setRowNumber] = useState(0);

  // setInterval(() => {
  //   moveFallingNumberDown(currentState);
  //   // update display of board
  // }, 5000);

  // Restart function that reinitializes currentState
  const restart = () => {
    setCurrentState(initialState);
    setRowNumber(0);
  };

  console.log('RENDER');

  return (
    <div className="grid">
      <TopButtons
        currentState={currentState}
        setCurrentState={setCurrentState}
        rowNumber={rowNumber}
        setRowNumber={setRowNumber}
      />

      <div className="board">
        {currentState.map((row, i) =>
          row.map((number, j) =>
            number ? (
              <Square key={j} number={number} />
            ) : (
              <Square key={j} number={0} />
            ),
          ),
        )}
      </div>

      <button style={{ height: '40px', width: '300px' }} onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Board;
