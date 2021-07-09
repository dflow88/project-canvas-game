const f = new FontFace("Pacifico", 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  f.load().then(function() {
    // Ready to use the font in a canvas context
});

// IMPORTING THE CANVAS

const canvas = document.getElementById("main");
ctx = canvas.getContext("2d");

// AUDIOS
const audioElementMain = document.getElementById("main-song");
audioElementMain.load()
audioElementMain.volume = 0.2
const audioElementCollision = document.getElementById("collision");
audioElementCollision.load
audioElementCollision.volume = 0.3
const audioElementInstructor = document.getElementById("instructor-eat");
audioElementInstructor.load()
audioElementInstructor.volume = 0.3
const audioElementChocolate = document.getElementById("choco-eat");
audioElementChocolate.load()
audioElementChocolate.volume = 0.3
const audioElementWin1 = document.getElementById("win1");
audioElementWin1.load()
audioElementWin1.volume = 0.4
const audioElementWin2 = document.getElementById("win2");
audioElementWin2.load()
audioElementWin2.volume = 0.4
const audioElementWin3 = document.getElementById("win3");
audioElementWin3.load()
audioElementWin3.volume = 0.4
const audioElementLose = document.getElementById("lose");
audioElementLose.load()
audioElementLose.volume = 0.4



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
    this.blinkFrames = 0
    this.blink = false
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
    if (this.blinkFrames > 0 && this.type == 'surfer') {
      if (this.blink == false) {
        if (surfer.speedX<0){
          surferLeft.image.onload;
          ctx.drawImage(surferLeft.image, this.x, this.y, this.width, this.height);
        } else {
          this.image.onload;
          ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
          this.blink = true
        
      } else {
          this.blink = false
      }
    } else {
      if (this.type == 'surfer' && surfer.speedX<0) {
        surferLeft.image.onload;
        ctx.drawImage(surferLeft.image, this.x, this.y, this.width, this.height);
      } else {
        this.image.onload;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }
  }


}

// Motor del juego
function updateGameArea() {
  gameArea.clear();
  audioElementMain.play()
  surfer.newPos();
  surfer.update();
  scoreImage.update()
  scoreNumber()
  newLiveImage() 
  newObstacle();
  newInstructor()
  // newBubble()
  newChocolate()
  oneUp()
  runOverWin()
  gameOver()
}

// INICIO DE SURFER
const surfer = new Character("./images/kid-surf.png", 100, 250, 90, 115, 'surfer');
const surferLeft = new Character("./images/kid-surf-left.png", 100, 250, 90, 115, 'surfer');

const liveImageArray = ["./images/lives.png", canvas.width - 240 +40 * 1, 10, 30, 45, 'liveImage']

// INICIO Y UPDATE POSITION DE OBSTACULOS

const obstacleArray = [
  ["./images/lonboard-student.png", canvas.width, canvas.height, 60, 140,0],
  ["./images/student-2.png", canvas.width, canvas.height, 140, 60,0],
  ["./images/pelican1.png", canvas.width, canvas.height, 60, 60,0],
  ["./images/pelican2.png", canvas.width, canvas.height, 60, 60,0],
];

const instructorArray = ["./images/surf-instructor.png", canvas.width, canvas.height, 60, 60, 0]

// const bubbleArray = ["./images/Fuera.png", canvas.width, canvas.height, 60, 30, 0]

const chocolateArray = ["./images/funny-chocolate.png", canvas.width, canvas.height, 30, 35, 0]


const scoreImage = new Character(instructorArray[0],canvas.width - instructorArray[3]/2 -(instructorArray[3]+15), 10,40,40,instructorArray[5])




//OBSTACULOS E INSTRUCTORES ACUMULADOS

const obstacles = [];

const instructors = []

const chocolates = []

const livesImages = []

// const bubbles = []

