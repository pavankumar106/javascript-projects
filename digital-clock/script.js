window.addEventListener("load", calculateTime())


function calculateTime() {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();
  var min = date.getMinutes();
  var ampm = hour >= 12 ? "PM" : "AM";
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? 12 : "12";
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  document.getElementById("day").innerHTML = dayNames[day];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime,200);
}
