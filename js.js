//Audio Credits To Piyush

var a = new Audio("https://www.dropbox.com/s/wuhnr1wz26sf4np/happy.mp3?dl=1");

window.addEventListener('click',() => {
a.play();
});

function aakuWriter(target, msg) {
    let i=0,
        id = setInterval(() => {
        
        target.append(msg[i++]);
        if (i >= msg.length) {
            clearInterval(id);         
        }
    }, 70);
}

function apear(){
    document.getElementById("HBD").style.display="block";
}
window.onload = function(){
    confetti.start(); 

}


alert(" Hii,-Happy Birthday Shreya🥳- click on screen for music")


