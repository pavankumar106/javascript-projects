/* 
Write a javaScript program to print first half 
of a even length string
*/

function firstHalf(str) {
  var len = str.length;
  return (str = str.slice(0, len / 2));
}

console.log(firstHalf("sham"));
console.log(firstHalf("shamba"));
console.log(firstHalf("shambavi"));
