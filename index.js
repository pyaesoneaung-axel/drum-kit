let drumSet = {
  w: document.querySelector(".w"),
  a: document.querySelector(".a"),
  s: document.querySelector(".s"),
  d: document.querySelector(".d"),
  j: document.querySelector(".j"),
  k: document.querySelector(".k"),
  l: document.querySelector(".l"),
};

let drum = document.querySelector("body");

// for (let oKey in drumSet) {
//   drumSet[oKey].setAttribute("onClick", `playDrum(${oKey})`);
// }

drumSet.w.setAttribute("onClick", `playDrum("w")`);
drumSet.a.setAttribute("onClick", `playDrum("a")`);
drumSet.s.setAttribute("onClick", `playDrum("s")`);
drumSet.d.setAttribute("onClick", `playDrum("d")`);
drumSet.j.setAttribute("onClick", `playDrum("j")`);
drumSet.k.setAttribute("onClick", `playDrum("k")`);
drumSet.l.setAttribute("onClick", `playDrum("l")`);

drum.addEventListener("keydown", function (e) {
  let key = e.key;
  let keySet = ["w", "a", "s", "d", "j", "k", "l"];
  if (keySet.includes(key)) {
    console.log("h");
    playDrum(key);
  }
});

function playDrum(key) {
  document.getElementById(`${key}`).play();
}
