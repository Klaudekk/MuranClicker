// Variables
let manfaces = 0;
let manfacesperclick = 1;
let manfacespersecond = 0;
let TotalClicks = 0;
// Functions
function increase() {
  TotalClicks += 1
  manfaces += manfacesperclick;
  document.getElementById("totalmanfaces").innerText = manfaces; // Update
}
function devmode() {
  var setting = document.getElementById("devmodeoption");
  var devmodeContent = document.getElementById("devmodecontent");
  if (setting.checked == true) {
    devmodeContent.style.display = "block";
  } else {
    devmodeContent.style.display = "none";
  }
}

function get1000manface() {
  manfaces += 1000;
  document.getElementById("totalmanfaces").innerText = manfaces;
  return console.info("Added 1000 Man Faces")
}
// lmao
console.log("== So You're Cheating Huh? ==")
