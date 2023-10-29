// remove duplicate elements from the array
function removeDuplicates(arr){
    const uniqueElements=[];
    
    for(let i=0 ; i<arr.length ; i++){
        if( uniqueElements.indexOf(arr[i])===-1){
            uniqueElements.push(arr[i])
        }
    }
    return uniqueElements;
}
document.write(removeDuplicates([1,2,3,1,2,3,4]));

// ======= using Set ==========
function removeDuplicates(arr){
    return [...new Set(arr)];
    
}
document.write(removeDuplicates([1,2,3,1,2,3,4,5,5]));
