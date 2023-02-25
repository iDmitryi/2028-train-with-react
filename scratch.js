const tileDownfall = () => {
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
