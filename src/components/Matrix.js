import React, { useState } from 'react';
import Square from './Square';
import '../style/Grid.css';

const Grid = () => {
  const [matrix, setMatrix] = useState(Array(16).fill(null));

  const addTile = () => {
    let newMatrix = [...matrix];
    for (let i = 0; i < 4; i++) {
      if (newMatrix[i] === null) {
        newMatrix[i] = 2;
        break;
      }
    }
    setMatrix(newMatrix);
  };

  return (
    <div className="grid">
      <button onClick={addTile}>Add Tile</button>
      <div className="board">
        {matrix.map((number, i) =>
          number ? <Square key={i} number={number} /> : <Square key={i} />
        )}
      </div>
    </div>
  );
};

export default Grid;
