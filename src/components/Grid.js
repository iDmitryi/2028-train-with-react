import React, { useState } from 'react';
import Square from './Square';

import { getRandomTile } from '../helpers/helper';

import '../style/Grid.css';

const Grid = ({ rows, columns }) => {
  const initialState = Array.from(Array(rows), () => Array(columns).fill(0));

  const [currentState, setCurrentState] = useState(initialState);
  const [firstRow, setFirstRow] = useState(initialState[0]);

  const addTile = () => {
    const randomColumnIndex =
      Math.floor(Math.random() * currentState[0].length - 1) + 1;

    const randomTile = getRandomTile();

    // sets first number on first row
    const array = currentState.map((row, rowIndex, array) => {
      const currentRow = row.map((rowValue, columnIndex, row) => {
        // if first row
        if (rowIndex === 0) {
          // if random selected column index
          if (randomColumnIndex === columnIndex) {
            return randomTile;
          }
        }

        return 0;
      });

      // set first row
      if (array[0] === row) {
        setFirstRow(currentRow);
      }

      return currentRow;
    });

    setCurrentState(array);
  };

  const tileDownfall = () => {
    // TODO: make this function to move tile down one time if there are no
    // another tile
    const arrayAfterDownfall = currentState.map((row, rowIndex) => {
      const currentRow = row.map((rowValue, columnIndex) => {
        console.log(row === firstRow);

        return 0;
      });

      return currentRow;
    });

    console.table(arrayAfterDownfall);
  };

  tileDownfall();

  // Restart function that reinitializes currentState
  const restart = () => {
    setCurrentState(initialState);
  };

  return (
    <div className="grid">
      <div className="board">
        {currentState.map((row, i) =>
          row.map((number, j) =>
            number ? (
              <Square key={j} number={number} />
            ) : (
              <Square key={j} number={0} />
            )
          )
        )}
      </div>
      <button style={{ height: '40px', width: '300px' }} onClick={addTile}>
        Add Tile
      </button>
      <button style={{ height: '40px', width: '300px' }} onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Grid;
