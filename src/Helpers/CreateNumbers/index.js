const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


const getNumber = (min, max) => {
  const primeNumbers = [];
  primeNum: for (let i = min; i <= max; i++) {
    for (let j = min; j < i; j++) {
      if (i % j === 0) {
        continue primeNum;
      }
    }
    primeNumbers.push(i);
  }

  return primeNumbers;
};

const createNumbers = () => {
  let numbers = getNumber(2, 50);
  const filledArray = [];

  numbers.map((item, index) => {
    return filledArray.push({
      value: item,
      id: index,
      visible: false,
      disabled: false
    });
  });

  const combinedAndShuffledArray = shuffleArray([...filledArray, ...filledArray]);

  return combinedAndShuffledArray;
};



export default createNumbers;
