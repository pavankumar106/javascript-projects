/*
Write a javascript program to find the largest even number from array of integers
*/
function largestEvenNumber(arr) {
  var largest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest && arr[i] % 2 === 0) {
      largest = arr[i];
    } else {
    }
  }
}
console.log(largestEvenNumber([1, 11, 21, 31, 56]));
