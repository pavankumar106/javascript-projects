/*
Write a javascript program to compare two objects
to determine if the first one contains the same
properties as the second one (which may also have additional properties)
*/
const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectEqual = (a, b) => Object.keys(a).every((key) => b[key]);

console.log(objectEqual(objA, objB));
console.log(objectEqual(objA, objC));
console.log(objectEqual(objC, objB));
