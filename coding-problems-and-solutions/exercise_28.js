// find the missing elements in a array
var arrNum=[1,2,3,4,5,6,9];
var missingArr=[];

const missingValues=(arr)=>{
    var minValue=Math.min(...arr);
    var maxValue=Math.max(...arr);
    
    for(let i=minValue ; i< maxValue ; i++){
        if(arr.indexOf(i)<0){
            missingArr.push(i)
        }
    }
return missingArr;
}
console.log(missingValues(arrNum));
