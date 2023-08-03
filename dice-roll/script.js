function shuffle() {
  var img = document.getElementById("img");
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  var diceSrc = "./images/" + diceNumber + ".png";
  img.setAttribute("src", diceSrc);
    console.log(diceNumber);
}
// function animate(){
//     setTimeout(shuffle,500){
//         const img=document.getElementById("img");
//         img.setAttribute("src", "dice-animate.GIF");
//     }
// }
