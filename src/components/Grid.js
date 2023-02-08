import React, { useState } from 'react';
import Square from './Square';

import '../style/Grid.css';

const Grid = () => {
  const [grid, setGrid] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  const addTile = () => {
    let newGrid = [...grid];
    for (let i = 0; i < 4; i++) {
      if (newGrid[0][i] === null) {
        newGrid[0][i] = 2;
        break;
      }
    }
    setGrid(newGrid);
  };

  return (
    <div className="grid">
      <button onClick={addTile}>Add Tile</button>
      <div className="board">
        {grid.map((row, i) =>
          row.map((number, j) =>
            number ? (
              <Square key={`${i}-${j}`} number={number} />
            ) : (
              <Square key={`${i}-${j}`} />
            )
          )
        )}
      </div>
    </div>
  );
  //   const [grid, setGrid] = useState(Array(4).fill(Array(4).fill(null)));
  //   const [grid, setGrid] = useState([
  //     [2, 4, 8, 16],
  //     [32, 64, 128, 256],
  //     [512, 1024, 2048, 512],
  //     [8, 16, 128, 64],
  //   ]);

  //   return (
  //     <div className="grid">
  //       <div className="board">
  //         {grid.map((row, i) =>
  //           row.map((number, j) => <Square key={`${i}-${j}`} number={number} />)
  //         )}
  //       </div>
  //     </div>
  //   );
};

export default Grid;
