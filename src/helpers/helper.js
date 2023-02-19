// Gets a random element from an array of numbers
export const getRandomTile = () => {
  const numbers = [2, 4, 8, 16];

  const randomIndex = Math.floor(Math.random() * numbers.length);
  const random = numbers[randomIndex];

  return random;
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
