// Reverse a string
function reverseString(str){
        let rev="";
        
        for(let i=str.length-1 ; i>=0 ; i--){
            rev+=str[i];
        }
        return rev;
}

document.write(reverseString("happy"));  // OUTPUT: yppah

// ======= using built in functions ===========

function reverseString(str){
        return str.split("").reverse().join("");
}

document.write(reverseString("abcd"));
