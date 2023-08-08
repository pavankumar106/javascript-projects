// count vowels in a string
const countV = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;

console.log(countV("acvde"));
