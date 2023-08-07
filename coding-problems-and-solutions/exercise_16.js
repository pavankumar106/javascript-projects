/*
Write javascript program to replace the first digit in a string with '$' symbol
*/

const replaceDigit = (str) => str.replace(/[0-9]/, "$");
console.log(replaceDigit("abc1lkj"));
console.log(replaceDigit("ab1lkj"));
console.log(replaceDigit("a1lkj"));
