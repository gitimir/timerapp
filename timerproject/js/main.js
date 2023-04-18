import Timer from "./Timer.js";


let play = document.getElementById("play");
function playMusic() {
 let audio = new Audio("beep.mp3");
 audio.play()
}
play.addEventListener("click", playMusic);


new Timer(
    document.querySelector(".timer")

);