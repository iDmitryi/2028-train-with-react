import React, { useState } from 'react';

import {
  moveFallingNumberDown,
  moveRightOnTheFly,
  moveLeftOnTheFly,
  addTile,
  getRandomTile,
} from '../helpers/helper';

const TopButtons = ({
  currentState,
  setCurrentState,
  rowNumber,
  setRowNumber,
}) => {
  const [activeTileRowIndex, setActiveTileRowIndex] = useState(0);

  const CURRENT_TILE_NUMBER = getRandomTile();

  /**
   * ADD new tile in the first row
   */
  const addTileOnFirstRow = () => {
    const updatedBoard = addTile(currentState, CURRENT_TILE_NUMBER);

    setCurrentState(updatedBoard);
    setRowNumber(0);
    setActiveTileRowIndex(updatedBoard[0].indexOf(CURRENT_TILE_NUMBER));
  };

  /**
   * DOWN
   */
  const moveDown = () => {
    const updatedBoard = moveFallingNumberDown(currentState);

    setCurrentState(updatedBoard);

    const currentRowItems = updatedBoard[rowNumber + 1];

    let nextRowItems = updatedBoard[rowNumber + 2];

    console.log(
      { activeTileRowIndex, rowNumber: rowNumber + 1 },
      currentRowItems,
      nextRowItems,
    );
    console.table(updatedBoard);

    if (
      rowNumber < updatedBoard.length &&
      nextRowItems &&
      nextRowItems[activeTileRowIndex] === 0
    ) {
      console.log('INCREMENTED');
      setRowNumber(rowNumber + 1);
    }
  };

  /**
   * RIGHT
   */
  const moveRight = () => {
    const updatedBoard = moveRightOnTheFly(currentState, rowNumber);

    setCurrentState(updatedBoard);

    console.log(updatedBoard[rowNumber][activeTileRowIndex + 1]);

    setActiveTileRowIndex((prevState) =>
      prevState < updatedBoard[0].length - 1 &&
      updatedBoard[rowNumber][prevState + 1] === 0
        ? prevState + 1
        : prevState,
    );
  };

  /**
   * LEFT
   */
  const moveLeft = () => {
    const updatedBoard = moveLeftOnTheFly(currentState, rowNumber);

    setCurrentState(updatedBoard);
    setActiveTileRowIndex((prevState) =>
      prevState === 0 && updatedBoard[rowNumber][activeTileRowIndex - 1] !== 0
        ? prevState
        : prevState - 1,
    );
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
