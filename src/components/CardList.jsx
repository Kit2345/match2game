const cardList = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
    { id: 9, value: 9 },
  ];

// const cardArray = [];

  // Take cardArray
  // [1-8]
  // math.random to choose one number, add to end
  // randomise new array of 9 numbers
  // iterate through list, add ID and value to array of objects

function addRandom() {
    const basicArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const random = Math.floor(Math.random() * 8);
    basicArray.push(basicArray[random]);
    return basicArray;
}

