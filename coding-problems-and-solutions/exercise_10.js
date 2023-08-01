/*
Write a javascript program to check the given string that contains 
2 to 4 occurrences of a specified character
*/

function countChar(str, char) {
  var result;
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
    }
  }
  if (count >= 2 && count <= 4) {
    result = "Yes";
  } else {
    result = "No";
  }
  return result;
}
console.log(countChar("yahooo", "o"));
console.log(countChar("yaho", "o"));
console.log(countChar("yahooo", "y"));
