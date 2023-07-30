/*
Write a javascript program to create a new string 
from a given string taking the first three characters 
and last 3 characters of a string. The string length should be 
3 or more if not original string is returned
*/

function myString(str) {
  var result;
  if (str.length <= 3) {
    result = str;
  } else {
    result = str.slice(0, 3) + str.slice(-3);
  }
  return result;
}
console.log(myString("abababxyz"));
console.log(myString("ba"));
