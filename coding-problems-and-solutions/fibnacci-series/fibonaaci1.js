// fibonacci series upto n terms
// taking input from user
const number = parseInt(prompt("number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("----------------Fibonacci series-------------------");
for (let i = 0; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
