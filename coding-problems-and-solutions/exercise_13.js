/*
Write a javascript program to check weather a given array
of integers is sorted in ascending order
*/

const checkAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i+1]) {
        return true
    };
  }
};
console.log(checkAscending([1, 2, 3]));
console.log(checkAscending([1, 2, 3, 1]));
