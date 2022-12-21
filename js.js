//Audio Credits To Piyush

var a = new Audio("https://dl.dropbox.com/s/rf7jk177drpbu0f/Happy%20Birthday%20Kids%20Mix.mp3");

window.addEventListener('click',() => {
a.play();
});

alert(" Hii,-Happy Birthday Shreya🥳- click on screen for music")

function apear(){
    document.getElementById("HBD").style.display="block";
}
window.onload = function(){
    confetti.start(); 

}
 function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
