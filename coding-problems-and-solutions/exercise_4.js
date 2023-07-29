/*
Write a javascript program to get
current date

expected output:
mm-dd-yyyy
mm/dd/yyyy
dd-mm-yyyy
dd/mm/yyyy
*/

function formatDate() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getYear();
  return `${day}/${month}/${year}`;
}
console.log(formatDate());
