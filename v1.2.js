let drumSet = {};
let buttons = {};
let keySet = ["w", "a", "s", "d", "j", "k", "l"];
let audioPaths = [
  "tom-1",
  "tom-2",
  "tom-3",
  "tom-4",
  "snare",
  "crash",
  "kick-bass",
];

for (let i = 0; i < 7; i++) {
  drumSet[keySet[i]] = document.createElement("audio");
  drumSet[keySet[i]].setAttribute("src", `sounds/${audioPaths[i]}.mp3`);
  drumSet[keySet[i]].setAttribute("control", "control");
  buttons[keySet[i]] = document.querySelector(`button.${keySet[i]}.drum`);
  buttons[keySet[i]].setAttribute("onClick", `playDrum(keySet[${i}])`);
  // buttons[keySet[i]].setAttribute("onClick", `playDrum(drumSet[${keySet[i]}])`);
  // buttons[keySet[i]].setAttribute("onClick", `playDrum(${drumSet[keySet[i]]}`);
  // ? Above two lines won't work
}

document.addEventListener("keydown", function (e) {
  let key = e.key;
  if (keySet.includes(key)) {
    playDrum(key);
  }
});

function playDrum(key) {
  drumSet[key].play();
  animateButton(key);
}

function animateButton(key) {
  let btn = buttons[key];
  btn.classList.add("pressed");
  window.setTimeout(function () {
    btn.classList.remove("pressed");
  }, 100);
}
