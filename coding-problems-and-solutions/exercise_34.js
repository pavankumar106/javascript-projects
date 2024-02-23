// check palindrome property of a number without toString()

function isPalindrome(number) {
  // Special case: negative numbers are not palindromes
  if (number < 0) {
    return false;
  }

  let reversedNumber = 0;
  let originalNumber = number;

  // Reverse the number
  while (number > 0) {
    const digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }

  // Check if the reversed number is equal to the original number
  return originalNumber === reversedNumber;
}

// Test the function
const number = 12321;
if (isPalindrome(number)) {
  console.log(number + " is a palindrome.");
} else {
  console.log(number + " is not a palindrome.");
}
