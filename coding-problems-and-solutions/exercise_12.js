/*
Write a javascript program to find the number of 
even digits upto a given number 
*/
function totalEvenNumbers(number) {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (i % 2 == 0) count++;
  }
  return count;
}
console.log(totalEvenNumbers(10));
console.log(totalEvenNumbers(15));
