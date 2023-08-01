/*
Given two values, write a javascript program 
to find out which one is nearest to 100
*/
function nearestNumber(num1, num2) {
  var result;
  var n1 = num1;
  var n2 = num2;
  num1 = 100 - num1;
  num2 = 100 - num2;
  if (num1 > num2) {
    result = n2 + " is nearest to 100";
  } else if (num1 < num2) {
    result = n1 + " is nearest to 100";
  } else {
    result = "Both are same";
  }
  return result;
}
console.log(nearestNumber(50, 60));
console.log(nearestNumber(50, 30));
console.log(nearestNumber(50, 50));
