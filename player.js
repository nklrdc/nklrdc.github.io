//Tape player code---------------------------------------------
const wheel1 = document.getElementById("wheel1")
const wheel2 = document.getElementById("wheel2")
const play= document.getElementById("play")
const stop= document.getElementById("stop")
const pause= document.getElementById("pause")
const audio = new Audio("tune.ogg")
audio.loop = true


function playAudio(){
    audio.play()
    document.documentElement.style.setProperty("--animation-state" , "running")
}
function pauseAudio(){
    audio.pause()
    document.documentElement.style.setProperty("--animation-state" , "paused")
}
function stopAudio(){
    audio.pause()
    audio.currentTime = 0
    document.documentElement.style.setProperty("--animation-state" , "paused")
}

