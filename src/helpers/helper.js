// Gets a random element from an array of numbers
export const getRandomTile = () => {
  const numbers = [2, 4, 8, 16];

  const randomIndex = Math.floor(Math.random() * numbers.length);
  const random = numbers[randomIndex];

  return random;
};

export const addTile = (currentBoardState, CURRENT_TILE_NUMBER) => {
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
          return CURRENT_TILE_NUMBER;
        }
      }

      return rowValue;
    });

    return currentRow;
  });

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

  return board;
};

export const moveRightOnTheFly = (currentBoardState, rowNumber) => {
  const board = currentBoardState.map((row, rowIndex, array) => {
    return row.map((cell, colIndex) => {
      if (rowNumber === rowIndex) {
        if (cell === 0 && colIndex >= 0 && colIndex < row.length) {
          return row[colIndex - 1] || 0;
        }

        return colIndex < row.length - 1 ? 0 : cell;
      }

      return cell;
    });
  });

  return board;
};

export const moveLeftOnTheFly = (currentBoardState, rowNumber) => {
  const board = currentBoardState.map((row, rowIndex, array) => {
    return row.map((cell, colIndex) => {
      if (rowNumber === rowIndex) {
        if (cell === 0 && colIndex >= 0 && colIndex < row.length) {
          return row[colIndex + 1] || 0;
        }

        return colIndex > 0 ? 0 : cell;
      }

      return cell;
    });
  });

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
