// IMPORTING THE CANVAS

const canvas = document.getElementById("main");
ctx = canvas.getContext("2d");

// STRUCTURE OF THE GAME AREA

const gameArea = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  }
};



class Character {
  constructor(url, x, y, width, height) {
    this.speedX = 0;
    this.speedY = 0;
    this.image = new Image();
    this.image.src = url;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  newPos() {
    if (this.x > 0 && this.x < canvas.width - this.width) {
      this.x += this.speedX;
    } else {
      this.x -= this.speedX;
      this.speedX = 0;
    }
    if (this.y > 0 && this.y < canvas.height - this.height) {
      this.y += this.speedY;
    } else {
      this.y -= this.speedY;
      this.speedY = 0;
    }

    ctx.fillStyle = 'grey'
    ctx.fillRect(700,15,180,50)
    ctx.beginPath();
    ctx.moveTo(500, 0);
    ctx.lineTo(655, 140);
    ctx.lineTo(690, 180);
    ctx.lineTo(750, 240);
    ctx.lineTo(840, 300);
    ctx.lineTo(canvas.width, 330);
    ctx.lineTo(canvas.width, 0);
    ctx.closePath();
    if (ctx.isPointInPath(this.x, this.y)) {
      this.y -= this.speedY;
      this.speedY = 0;
      this.x -= this.speedX;
      this.speedX = 0;
    }
  }

  update() {
    this.image.onload;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }


}

// Motor del juego
function updateGameArea() {
  gameArea.clear();
  surfer.newPos();
  surfer.update();
  newObstacle();
  gameOver()
}

// INICIO DE SURFER
const surfer = new Character("./images/kid-surf-initial-pos.png", 100, 250, 90, 115);

// INICIO Y UPDATE POSITION DE OBSTACULOS

const obstacleArray = [
  ["./images/surf-instructor.png", 1080, 0, 60, 60],
  ["./images/lonboard-student.png", 1080, 0, 60, 140],
  ["./images/student-2.png", 1080, 0, 140, 60],
  ["./images/pelican1.png", 1080, 0, 60, 60],
  ["./images/pelican2.png", 1080, 0, 60, 60],
];



function newObstacle() {
  for (i = 0; i < obstacles.length; i++) {
    if ( obstacles[i].y < 300) {
        obstacles[i].x -= 2;
        obstacles[i].y -= 2;
    } else if (obstacles[i].y < 400) {
        obstacles[i].x -= 2;
        obstacles[i].y -= 1;
    } else if (obstacles[i].y < 500) {
        obstacles[i].x -= 2;
        obstacles[i].y -= 0.5;
    } else {
        obstacles[i].x -= 2;
        obstacles[i].y -= 0.3;  
    }
    obstacles[i].update();
  }

  gameArea.frames += 1;

  if (gameArea.frames % 120 === 0) {
    let r1 = Math.floor(Math.random() * obstacleArray.length);
    let r2 = Math.floor(Math.random() * obstacleArray.length);
    let rY1 = Math.floor(Math.random() * (465 - 330) + 330);
    let rY2 = Math.floor(Math.random() * (canvas.height - 465) + 465);
    obstacles.push(
      new Character(obstacleArray[r1][0],canvas.width-obstacleArray[r1][3], rY1,obstacleArray[r1][3],obstacleArray[r1][4]
      )
    );
    obstacles.push(
        new Character(obstacleArray[r2][0],canvas.width-obstacleArray[r2][3], rY2,obstacleArray[r2][3],obstacleArray[r2][4]
        )
      );
  }
}

let lives = 3
let blinkFrames = 0

function crashes() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      surfer.x + surfer.width > obstacles[i].x &&
      surfer.x < obstacles[i].x + obstacles[i].width &&
      surfer.y + surfer.height > obstacles[i].y &&
      surfer.y < obstacles[i].y + obstacles[i].height
    ) {
      lives--
      console.log(lives)
      blinkFrames = 150
      // blinkTime()
    } //else {
    // }
  }
}

// function blinkTime() {
//   if (blinkFrames > 0) {
//     blinkFrames--
//   }
//   if (blinkFrames >= 0) 
// }

function gameOver() {
  if (blinkFrames === 0) {
    crashes()
  } else {
    blinkFrames--
  }
  if (lives <= 0) {
    gameArea.stop();
    return window.alert("Game Over!!!");
  }
}



//OBSTACULOS ACUMULADOS

const obstacles = [];
// INICIO DEL JUEGO
gameArea.start();

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