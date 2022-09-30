function getRandomIntInclusive (min, max) {
  if (min <0 || max <0){
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();

function checkLength (str, max_length) {
  if (str.length <= max_length) {
    return true;
  }
  return false;
}
checkLength();
