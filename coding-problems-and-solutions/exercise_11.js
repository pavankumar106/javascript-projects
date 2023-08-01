/*
Write a javascript program to find the number 
of even digits in an array of integer.
*/
function countEvenDigits(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    } else {
    }
  }
  return count;
}
console.log(countEvenDigits([2, 4, 8, 6, 2, 4, 8, 6, 11, 33, 25, 63, 21]));
console.log(countEvenDigits([2, 4, 8, 6, 9]));
