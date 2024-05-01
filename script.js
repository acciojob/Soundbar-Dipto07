//your JS code here. If required.
function playSound(soundName) {
    var sound = document.getElementById(soundName);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

function stopAllSounds() {
    var sounds = document.querySelectorAll("audio");
    sounds.forEach(function(sound) {
        sound.pause();
        sound.currentTime = 0;
    });
}

