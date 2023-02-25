import React from 'react';

import {
  moveFallingNumberDown,
  moveRightOnTheFly,
  moveLeftOnTheFly,
  addTile,
} from '../helpers/helper';

const TopButtons = ({
  currentState,
  setCurrentState,
  rowNumber,
  setRowNumber,
}) => {
  const addTileOnFirstRow = () => {
    const updatedBoard = addTile(currentState);

    setCurrentState(updatedBoard);
    setRowNumber(0);
  };

  const moveDown = () => {
    const updatedBoard = moveFallingNumberDown(currentState);

    setCurrentState(updatedBoard);

    // TODO: change this condition
    //           !currentState[rowNumber + 1].filter(Boolean).length
    // to ADD tiles between themselves

    const nextItemInColumn = currentState[rowNumber + 1].filter(Boolean);

    let currentItemColumn = currentState[rowNumber + 2].filter(Boolean);

    console.log(currentItemColumn, nextItemInColumn);

    rowNumber < updatedBoard.length - 1 &&
      !nextItemInColumn.length &&
      setRowNumber(++rowNumber);
  };

  const moveRight = () => {
    const updatedBoard = moveRightOnTheFly(currentState, rowNumber);

    setCurrentState(updatedBoard);
  };

  const moveLeft = () => {
    const updatedBoard = moveLeftOnTheFly(currentState, rowNumber);

    setCurrentState(updatedBoard);
  };

  return (
    <>
      <button
        style={{ height: '40px', width: '300px' }}
        onClick={() => moveDown()}
      >
        DOWN
      </button>
      <button
        style={{ height: '40px', width: '300px' }}
        onClick={() => addTileOnFirstRow(currentState)}
      >
        Add Tile
      </button>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          style={{ height: '40px', width: '145px' }}
          onClick={() => moveLeft()}
        >
          LEFT
        </button>
        <button
          style={{ height: '40px', width: '145px' }}
          onClick={() => moveRight()}
        >
          RIGHT
        </button>
      </div>
    </>
  );
};

export default TopButtons;
