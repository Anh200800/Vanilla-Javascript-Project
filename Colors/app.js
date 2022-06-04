const colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
const clickme = document.querySelector(".center")

clickme.addEventListener("click", changeColorBackground);

function changeColorBackground() {

let color =  Math.floor(Math.random() * 11);
document.body.style.background = colors[color]
}