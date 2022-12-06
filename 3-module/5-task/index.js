function getMinMax(str) {
  let newArr = str.split(' ').filter(item => isFinite(item)).map(item => item).sort((a, b) => a - b);
  return {
    min: Number(newArr[0]),
    max: Number(newArr[newArr.length - 1]),
  };
}
