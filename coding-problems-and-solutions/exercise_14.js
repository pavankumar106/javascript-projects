/*
Write a javascript program to find the largest 
number from array of integers
*/

let arr = [1, 2, 3, 12,2,5,8];
let largest = 0;
var i, j;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  } else {
  }
}

console.log(largest);
