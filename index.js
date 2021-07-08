// IMPORTING THE CANVAS

const canvas = document.getElementById("main");
ctx = canvas.getContext("2d");

// STRUCTURE OF THE GAME AREA

const gameArea = {
  frames1: 0,
  frames2: 0,
  frames3: 0,
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
  constructor(url, x, y, width, height, type) {
    this.speedX = 0;
    this.speedY = 0;
    this.image = new Image();
    this.image.src = url;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type
    this.lives = 3
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
  newLivesImage() 
  newObstacle();
  newInstructor()
  newChocolate()
  oneUp()
  runOverWin()
  gameOver()
}

// INICIO DE SURFER
const surfer = new Character("./images/kid-surf (1).png", 100, 250, 90, 115, 'surfer');

const livesImageArray = ["./images/lives.png", canvas.width - 240, 10, 36, 54, 'lives'];



// INICIO Y UPDATE POSITION DE OBSTACULOS

const obstacleArray = [
  ["./images/lonboard-student.png", canvas.width, canvas.height, 60, 140,0],
  ["./images/student-2.png", canvas.width, canvas.height, 140, 60,0],
  ["./images/pelican1.png", canvas.width, canvas.height, 60, 60,0],
  ["./images/pelican2.png", canvas.width, canvas.height, 60, 60,0],
];

const instructorArray = ["./images/surf-instructor.png", canvas.width, canvas.height, 60, 60, 0]

const chocolateArray = ["./images/funny-chocolate.png", canvas.width, canvas.height, 30, 35, 0]

function newInstructor() {
  for (i = 0; i < instructors.length; i++) {
      if (instructors[i].y < 300) {
          instructors[i].x -= 2;
          instructors[i].y -= 2;
      } else if (instructors[i].y < 400) {
          instructors[i].x -= 2;
          instructors[i].y -= 1;
      } else if (instructors[i].y < 500) {
          instructors[i].x -= 2;
          instructors[i].y -= 0.5;
      } else {
          instructors[i].x -= 2;
          instructors[i].y -= 0.3;  
      }
      instructors[i].update();
      }

  gameArea.frames1 += 1;

  if (gameArea.frames1 % 360 === 0) {
    let rY = Math.floor(Math.random() * (canvas.height - 330) + 330);
    instructors.push(
        new Character(instructorArray[0],canvas.width-instructorArray[3], rY,instructorArray[3],instructorArray[4],instructorArray[5]
        )
      );
  }
}

function newChocolate() {
  for (i = 0; i < chocolates.length; i++) {
      if (chocolates[i].y < 300) {
          chocolates[i].x -= 3;
          chocolates[i].y -= 3;
      } else if (chocolates[i].y < 400) {
          chocolates[i].x -= 3;
          chocolates[i].y -= 1.5;
      } else if (chocolates[i].y < 500) {
          chocolates[i].x -= 3;
          chocolates[i].y -= 0.75;
      } else {
          chocolates[i].x -= 3;
          chocolates[i].y -= 0.45;  
      }
      chocolates[i].update();
      }

  gameArea.frames3 += 1;

  if (gameArea.frames3 % 840 === 0) {
    let rY = Math.floor(Math.random() * (canvas.height - 330) + 330);
    chocolates.push(
        new Character(chocolateArray[0],canvas.width-chocolateArray[3], rY,chocolateArray[3],chocolateArray[4],chocolateArray[5]
        )
      );
  }
}

function newObstacle() {
  for (i = 0; i < obstacles.length; i++) {
    if (obstacles[i].type === 'x') {
        if (obstacles[i].y < 300) {
          obstacles[i].x += 2;
          obstacles[i].y -= 2;
      } else if (obstacles[i].y < 400) {
          obstacles[i].x -= 2;
          obstacles[i].y -= 2;
      } else if (obstacles[i].y < 500) {
          obstacles[i].x += 2;
          obstacles[i].y -= 2;
      }  else {
          obstacles[i].x -= 2;
          obstacles[i].y -= 2;  
      }
      obstacles[i].update();  
    } else {
      if (obstacles[i].y < 300) {
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
  }

  gameArea.frames2 += 1;


    let r1 = Math.floor(Math.random() * obstacleArray.length);
    let r2 = Math.floor(Math.random() * obstacleArray.length);
    let r3 = Math.floor(Math.random() * obstacleArray.length);
    let rY1 = Math.floor(Math.random() * (canvas.height - 465) + 465);
    let rY3 = Math.floor(Math.random() * (465 - 330) + 330);
    let rX = Math.floor(Math.random() * (canvas.width/2));
    if (gameArea.frames2 % 120 === 0) {
    obstacles.push(
        new Character(obstacleArray[r1][0],canvas.width-obstacleArray[r1][3], rY1,obstacleArray[r1][3],obstacleArray[r1][4],"y"
        )
      );
    }
    if (gameArea.frames2 % 140 === 0) {
    obstacles.push(
        new Character(obstacleArray[r3][0],canvas.width-obstacleArray[r3][3], rY3,obstacleArray[r3][3],obstacleArray[r3][4],"y"
        )
      );
    }
    if (gameArea.frames2 % 160 === 0) {
    obstacles.push(
        new Character(obstacleArray[r2][0],rX, canvas.height-obstacleArray[r2][4],obstacleArray[r2][3],obstacleArray[r2][4],"x"
        )
      );
    }
}

function newLivesImage() {
  for (i = 0; i < surfer.lives; i++) {
    livesImages.push(
      new Character(livesImageArray[0],canvas.width-livesImageArray[3] *10 + i*livesImageArray[3] +5, livesImageArray[2],livesImageArray[3],livesImageArray[4],livesImageArray[5]
      )
    );
      }
      livesImages[i].update();
}

// let lives = 3
let blinkFrames = 0

function crashes() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      surfer.x + surfer.width -15 > obstacles[i].x &&
      surfer.x + 15 < obstacles[i].x + obstacles[i].width &&
      surfer.y + surfer.height - 20 > obstacles[i].y &&
      surfer.y + 20 < obstacles[i].y + obstacles[i].height
    ) {
      surfer.lives--
      console.log(surfer.lives)
      blinkFrames = 150
      // blinkTime()
    } //else {
    // }
  }
}

function oneUp() {
  for (let i = 0; i < chocolates.length; i++) {
    if (
      surfer.x + surfer.width -15 > chocolates[i].x &&
      surfer.x + 15 < chocolates[i].x + chocolates[i].width &&
      surfer.y + surfer.height - 20 > chocolates[i].y &&
      surfer.y + 20 < chocolates[i].y + chocolates[i].height
    ) {
      surfer.lives++
      console.log(surfer.lives)
      chocolates.splice(i,1)
      // blinkTime()
    } //else {
    // }
  }
}

let goal = 0
function runOverWin() {
  for (let i = 0; i < instructors.length; i++) {
    if (
      surfer.x + surfer.width -15 > instructors[i].x &&
      surfer.x + 15 < instructors[i].x + instructors[i].width &&
      surfer.y + surfer.height - 20 > instructors[i].y &&
      surfer.y + 20 < instructors[i].y + instructors[i].height
    ) {
      goal++
      console.log(goal)
      instructors.splice(i,1)

    if (goal == 10) {
      gameArea.stop();
      window.alert("YEWWW You win!")
    }
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


// function drawLives() {
//   const livesImage = new Image()
//   livesImage.src = "./images/lives.png"
//   livesImage.onload = () => {
//   ctx.drawImage(livesImage, canvas.width - 240, 10, 36, 54);
//   }
// }

function gameOver() {

  if (blinkFrames === 0) {
    crashes()
  } else {
    blinkFrames--
  }
  if (surfer.lives <= 0) {
    gameArea.stop();
    return window.alert("Game Over!!!");
  }
}



//OBSTACULOS E INSTRUCTORES ACUMULADOS

const obstacles = [];

const instructors = []

const chocolates = []

const livesImages = []

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