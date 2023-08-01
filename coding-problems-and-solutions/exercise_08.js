/*
Write a javascript program to concatenate two
strings except their first character
*/
function concat(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}
console.log(concat("abc", "xyz"));
