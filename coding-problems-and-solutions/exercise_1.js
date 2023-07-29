// Write a javascript Perform to check two numbers and return
// true if one of the number is 100 or if the sum of two numbers is 100

function isEqual(a, b) {
  var result;
  if ((a === 100 && b === 0) || (a === 0 && b === 100)) {
    result = "True";
  } else if (a + b === 100) {
    result = "True";
  } else {
    result = "False";
  }
  return result;
}

console.log(isEqual(5, 0));

// using arrow function
//
// const isEqualTo100 = (a,b)=> a===100 || b===100 (a+b)===100;
//
//
//
//
//
