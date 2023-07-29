function palindrome(str) {
  var reg = /[\W_]/g;
  var smallStr = str.toLowerCase().replace(reg, "");
  var reversed = smallStr.split("").reverse("").join("");

  if (reversed === smallStr) {
    console.log("True");
  } else {
    console.log("False");
  }
}

palindrome("racecar9");
