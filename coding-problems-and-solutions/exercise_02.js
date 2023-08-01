/*
Write a javascript program to
print extension of a file
*/
function getFileExtension(str) {
  var extension = str.slice(str.lastIndexOf("."));
  return extension;
}

console.log(getFileExtension("file.html"));

/*
using arrow function

const getFileExtension = (str) => str.slice(str.lastIndexOf('.));
*/
