// find longest word in a sentence
const longestWord=(str)=>{
    const words=str.split(" ");
    let longWord="";
    
    for(let word of words){
        if(word.length > longWord.length)
            longWord=word
    }
    
return longWord;
}
document.write(longestWord("i know javascript"));
