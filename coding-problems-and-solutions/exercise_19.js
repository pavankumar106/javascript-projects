// generate hex color code
const randomNumber = () => Math.floor(Math.random() * 6).toString(16);
const code = () => "#" + Array.from({ length: 6 }).map(randomNumber).join("");
console.log(code());
console.log(code());
