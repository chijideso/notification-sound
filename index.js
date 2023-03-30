console.log ("hello world")
document.body.addEventListener('keydown', function(e){
    var keycode = e.keyCode;
    if (keycode=== 13){

        console.log(keycode +' keydown was clicked')
    }
})
document.body.addEventListener('keyup', function(e){
    var keycode = e.keyCode;
    if (keycode=== 13){

        console.log("keyup=> " +keycode +'keyup was clicked')
    }
})
document.body.addEventListener('keypress', function(e){
    var keycode = e.keyCode;
    if (keycode=== 13){

        console.log("keypress=> "+ keycode +' key was pressed')
    }
});
let play = document.getElementById("submit");

   function playMusic(){
    let audio = new Audio("./click.mp3")
    audio.play()
    onclick="document.submit.style.color = 'red'"
}
// play.addEventListener("click", playMusic)
// const audio = new Audio()
// audio.src = "./click.mp3"

var mainHeading = document.getElementById("main-heading")
var increase = document.getElementById("btn-increase")
var decrease = document.getElementById("btn-decrease")
//  console.log(mainheading)
var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize =parseInt( initialFontSize.substr(0, (initialFontSize.length-2)));

console.log(initialFontSize)
//  var initialFont = 0
increase.onclick = function (){
     initialFontSize += 10
     mainHeading.style.fontSize = parseInt(initialFontSize)  +"px";
}
decrease.onclick = function (){
     initialFontSize -= 10
     mainHeading.style.fontSize = parseInt(initialFontSize)  +"px";
}