import React, { useState } from 'react';

import '../style/Square.css';

const Square = ({ number }) => {
  return <div className={`square tile-${number}`}>{number}</div>;
};

export default Square;
