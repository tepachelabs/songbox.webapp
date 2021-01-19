export const getRandomNumber = (currentNumber, maxNumber) => {
  const randomNumber = Math.floor(Math.random() * maxNumber);
  return randomNumber === currentNumber ? getRandomNumber(currentNumber, maxNumber) : randomNumber;
};
