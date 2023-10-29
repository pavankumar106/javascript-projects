// palindrome checkker
const isPalindrome=(str)=>{
    const reversedStr=str.split("").reverse().join("");
    if(str === reversedStr) return true
    return false
}
document.write(isPalindrome("racecar"));
document.write(isPalindrome("javasc"));
