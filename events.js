// INICIO DEL JUEGO Y EVENTOS

const cover = document.getElementById("cover")
const beginButton = document.getElementById("btn")
const againButton = document.getElementById("again")
const again2Button = document.getElementById("again2")

beginButton.addEventListener("click", () => {
  gameArea.start()
  canvas.style.display = 'block'
  cover.style.display = 'none'
})

againButton.addEventListener("click", () => {
window.location.reload()
})

again2Button.addEventListener("click", () => {
  window.location.reload()
})


document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      surfer.speedX = -4.5
    break;
    case 39:
      surfer.speedX = 4.5
      break;
    case 38:
      surfer.speedY = -4.5
      break;
    case 40:
      surfer.speedY = 4.5
      break;
    default:
      return;
  }
});

document.addEventListener('keyup', () => {
  if (surfer.speedX > 0) {
    surfer.speedX = 0.5;
  } else {surfer.speedX = -0.5}
  
  if (surfer.speedY > 0) {
    surfer.speedY = 0.5
  } else {surfer.speedY = -0.5}
})


