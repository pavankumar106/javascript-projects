// factors of a number
function factors(num){
    var arr=[];
    for(i=1 ; i<=num ; i++){
        if(num%i === 0){
            arr.push(i)
        }else{
            
        }
    }
    return arr
}
console.log(factors(12)); // [ 1, 2, 3, 4, 6, 12 ]
