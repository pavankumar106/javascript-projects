var index = 0;

function changeColors() {
  var colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "violet",
    "orange",
    "pink",
    "grey",
    "purple",
  ];
  document.getElementsByClassName("container")[0].style.background =
    colors[index++];
  if (index > colors.length - 1) index = 0;
}
