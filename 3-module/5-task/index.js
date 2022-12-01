function getMinMax(str) {
  let newArr = str.split(' ').filter(item => isFinite(item)).map(item => item).sort((a, b) => a - b)
  min = Number(newArr[0])
  max = Number(newArr[newArr.length -1])
  let result = {
    min: min,
    max: max
  }
  console.log(typeof min)
  console.log(newArr)
  return result
}