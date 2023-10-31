// find duplicate elements in an array

const arrayNumbers=[1,2,3,2,4,5,6,4];

const duplicates=arrayNumbers.filter((item,index,arr)=> arr.indexOf(item)!==index );

console.log(duplicates);
