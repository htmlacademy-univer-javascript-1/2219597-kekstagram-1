function getRandomIntInclusive (min, max) {
  if (min <0 || max <0){
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();

function checkLength (str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
checkLength();
