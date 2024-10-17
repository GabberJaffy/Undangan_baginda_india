let audio = document.getElementById('audio');
let play = document.getElementById('buttoncover');
let mute = document.getElementById('mute');

play.addEventListener('click', function() {
    audio.play();
});

mute.addEventListener('click', function() {
    audio.muted = !audio.muted;
})

function copy() {
    navigator.clipboard.writeText("dana.id");
    alert("copied");
}