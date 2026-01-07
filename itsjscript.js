var count = 0;
var x = null;
var canVibrate = false;

var hackText =
"\n3.. 2.. 1..\n" +
"I am a Hacker.\n" +
"I hacked your device.\n" +
"Device Successfully Formatted!!\n" +
"Hurry up check your files.\n" +
"Oops..!\n" +
"Don't be scared, I'm just kidding ^_^";

window.onload = function () {
    document.getElementById("screen").textContent =
        "Hello...!\n" +
        "I am RUTUJA.\n\n" +
        "Click to start ->";
};

function startHack() {
    document.getElementById("startBtn").style.display = "none";
    canVibrate = true;
    x = setInterval(typeText, 120);
}

function typeText() {
    document.getElementById("screen").textContent += hackText[count];
    count++;

    if (canVibrate && hackText.substring(0, count).includes("Formatted")) {
        if ("vibrate" in navigator) {
            navigator.vibrate([300, 150, 300]);
            canVibrate = false;
        }
    }

    if (count >= hackText.length) {
        clearInterval(x);
    }
}
