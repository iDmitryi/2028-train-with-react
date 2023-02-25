// Gets a random element from an array of numbers
export const getRandomTile = () => {
  const numbers = [2, 4, 8, 16];

  const randomIndex = Math.floor(Math.random() * numbers.length);
  const random = numbers[randomIndex];

  return random;
};

export const addTile = (currentBoardState) => {
  const randomColumnIndex =
    Math.floor(Math.random() * currentBoardState[0].length - 1) + 1;

  // Check if there's a falling number in the first row
  const hasFallingNumber = currentBoardState[0].every((cell) => cell === 0);

  // sets first number on first row
  const board = currentBoardState.map((row, rowIndex, array) => {
    const currentRow = row.map((rowValue, columnIndex, row) => {
      // if first row and is empty
      if (rowIndex === 0 && hasFallingNumber) {
        // if random selected column index
        if (randomColumnIndex === columnIndex) {
          return getRandomTile();
        }
      }

      return rowValue;
    });

    // set first row
    // if (array[0] === row) {
    //   setFirstRow(currentRow);
    // }

    return currentRow;
  });

  // setCurrentState(board);
  return board;
};

export const moveFallingNumberDown = (currentBoardState, rowNumber) => {
  const board = currentBoardState.map((row, rowIndex, array) => {
    return row.map((cell, colIndex) => {
      if (cell === 0 && rowIndex > 0 && rowIndex < array.length) {
        return array[rowIndex - 1][colIndex];
      }

      return rowIndex === array.length - 1 || array[rowIndex + 1][colIndex]
        ? cell
        : 0;
    });
  });

  // console.table(board);

  return board;
};

export const moveRightOnTheFly = (currentBoardState, rowNumber) => {
  const board = currentBoardState.map((row, rowIndex, array) => {
    return row.map((cell, colIndex) => {
      // console.log({ lenght: row.length, colIndex, rowIndex });
      if (rowNumber === rowIndex) {
        if (cell === 0 && colIndex > 0 && colIndex < row.length) {
          return array[rowIndex][colIndex - 1];
        }

        return colIndex === row.length - 1 || array[rowIndex][colIndex + 1]
          ? cell
          : 0;
      }

      return cell;
    });
  });

  // console.table(board);

  return board;
};

export const moveLeftOnTheFly = (currentBoardState, rowNumber) => {
  const board = currentBoardState.map((row, rowIndex, array) => {
    const currentRow = row.map((cell, colIndex) => {
      if (rowNumber === rowIndex) {
        if (cell === 0 && colIndex >= 0 && colIndex < row.length - 1) {
          return array[rowIndex][colIndex + 1];
        }

        return colIndex === 0 || array[rowIndex][colIndex - 1] ? cell : 0;
      }

      return cell;
    });

    return currentRow;
  });

  // console.table(board);
  console.log({ rowNumber });

  return board;
};

// returns TRUE if two arrays have the same values
export const compareArrays = (arr1, arr2) => {
  // Compare length of arrays
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compare each element of arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) {
      return false;
    }
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        return false;
      }
    }
  }

  // Arrays are equal
  return true;
};

export const moveTilesDown = (currentState) => {
  console.log('moveTilesDown');

  //   let newGrid = [...currentState];
  //   for (let i = rows - 1; i > 0; i--) {
  //     for (let j = 0; j < columns; j++) {
  //       if (newGrid[i][j] === null) {
  //         newGrid[i][j] = newGrid[i - 1][j];
  //         newGrid[i - 1][j] = null;
  //       }
  //     }
  //   }
  //     setCurrentState(newGrid);
};

// const addTile = () => {
//   let newGrid = [...currentState];
//   for (let i = 0; i < columns; i++) {
//     if (newGrid[0][i] === null) {
//       newGrid[0][i] = 2;
//       break;
//     }
//   }

//   setCurrentState(newGrid);
//   moveTilesDown(newGrid);
// };

// Animation for falling tile

//   useEffect(() => {
// let timeoutId;
// for (let i = 0; i < rows - 1; i++) {
// timeoutId = setTimeout(moveTilesDown, 1000);
// }
// return () => {
//   clearTimeout(timeoutId);
// };
//   }, [currentState]);

export const tileDownfall = () => {
  let currentState = [[], []];
  let firstRow;

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

// Create a copy of the board array
// const newBoard = [...currentBoardState];

// Check if there's a falling number in the first row
// const hasFallingNumber = newBoard[0].some((cell) => cell === fallingTile);

// Move the falling number down one row
// newBoard.reverse().map((row, rowIndex) =>
//   row.map((col, colIndex) => {
//     let newCol = col;
//     if (rowIndex === 0 && col !== 0 && !hasFallingNumber) {
//       newBoard[newBoard.length - 1][colIndex] = col;
//       newBoard[rowIndex][colIndex] = 0;
//       newCol = 0;
//     } else if (rowIndex === 0 && col === 0) {
//       newBoard[newBoard.length - 1][colIndex] = fallingTile;
//       fallingTile = getRandomTile();
//     } else if (col === 0 && newBoard[rowIndex - 1][colIndex] !== 0) {
//       newBoard[rowIndex][colIndex] = newBoard[rowIndex - 1][colIndex];
//       newBoard[rowIndex - 1][colIndex] = 0;
//     }
//     return newCol;
//   }),
// );

// Reverse the board back to its original order
// newBoard.reverse();
