const progress = document.querySelector(".progress-bar");
const clicked = document.querySelector(".clicked");

let loader = false;
let width = 0;
let count = 0;

function loadBar() {
  clicked.innerText = ++count;
  if (loader === false) {
    progress.style.width = 0;
    progressStart();
  }
}

function progressStart() {
  loader = true;
  if (++width > 100) {
    clicked.innerText = --count;
    width = 0;
    if (count < 1) {
      loader = false;
      return;
    }
  }
  progress.style.width = `${width}%`;
  setTimeout(progressStart, 30);
}
