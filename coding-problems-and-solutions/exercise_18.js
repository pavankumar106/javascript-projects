/*
Write a javascript program to convert a comma separated values (CSV)
string to a 2D array. A new line indicates a new row in the array

example :
abc,dfc,dcd
hfn,kvf,kfj
ijg,jgh,bnv
*/
const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(","));
const str = `avc,cvc,cfd
cdv,cvc,vfv
decodeURI,gnv,knv`;

console.log(parseCSV(str));