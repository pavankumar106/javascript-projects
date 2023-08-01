/*
Write a javascript program to create a new string adding "New!"
in front of a given string. If the given string begin with "New!"
already then return the original string
*/

function addNew(str) {
  return str.indexOf("New!") === 0 ? str : `New! ${str}`;
}
console.log(addNew("offers"));
console.log(addNew("New! offers"));
