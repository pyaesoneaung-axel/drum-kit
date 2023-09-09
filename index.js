let drumSet = document.querySelectorAll(".drum");
let keySet = ["w", "a", "s", "d", "j", "k", "l"];
let drum = document.querySelector("body");

let i = 0;
for (let drum of drumSet) {
  // I have no clue why this is passing the "audio object with the id of ${keySet[i]}"
  // Maybe cuz class-name and that id-name is the same?
  drum.setAttribute("onClick", `playDrum(${keySet[i++]})`);
}

drum.addEventListener("keydown", function (e) {
  let key = e.key;
  if (keySet.includes(key)) {
    playDrum(document.getElementById(`${key}`));
  }
});

function playDrum(key) {
  key.play();
}
