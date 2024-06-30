// [2, 5, 9 , 1, 4].some(element =>  element > 10); // => return false

Array.prototype.ownSome = function(conditionCb) {
  let currentIndex = 0;
  while (currentIndex < this.length) {
    if (conditionCb(this[currentIndex])) {
      return true
    } else {
      currentIndex++
    }
  }
  return false
}

console.log([2,5,9,1,4].some((el) => el > 10))
console.log([2,5,9,1,4].ownSome((el) => el > 10))
console.log([2,5,9,1,4].some((el) => el > 8))
console.log([2,5,9,1,4].ownSome((el) => el > 8))