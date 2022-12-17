const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => (string.length <= length);

checkStringLength();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

let number, numberComment = 0;
const getId = () => {
  number ++;
  return number;
};

export {getRandomPositiveInteger, getRandomArrayElement, getId()};