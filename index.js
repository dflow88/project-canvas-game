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
  },
};




class Character {
  constructor(url, x, y, width, height) {
    this.speedX = 0
    this.speedY = 0
    this.image = new Image();
    this.image.src = url;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  newPos() {
    if (this.x > 0  && this.x < 1080 - this.width){
        this.x += this.speedX
    } else {
        this.x -= this.speedX
        this.speedX = 0
    }
    if (this.y > 0 && this.y < 650 - this.height) {
    this.y += this.speedY
    } else {
        this.y -= this.speedY
        this.speedY = 0
    }
        ctx.beginPath();
        ctx.moveTo(470,0)
        ctx.lineTo(655, 160)
        ctx.lineTo(700, 220)
        ctx.lineTo(750, 270)
        ctx.lineTo(840, 325)
        ctx.lineTo(1080, 450)
        ctx.lineTo(1080, 0)
        ctx.lineTo(470, 0)
        ctx.closePath()
    if (ctx.isPointInPath(this.x, this.y)) {
        this.y -= this.speedY
        this.speedY = 0
        this.x -= this.speedX
        this.speedX = 0
    }
  }


  update() {
      this.image.onload
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
  }


// Motor del juego
function updateGameArea() {
  gameArea.clear();
  surfer.newPos()
  surfer.update();
  newObstacle()
}

// INICIO DE SURFER
const surfer = new Character("./images/kid-surf-initial-pos.png", 100, 250, 90, 115);

// INICIO Y UPDATE POSITION DE OBSTACULOS
function newObstacle() {
    for (i=0; i< obstacles.length; i++) {
        obstacles[i].x -= 2
        obstacles[i].y -= 1
        obstacles[i].update()
    }
    gameArea.frames += 1
    const obstacleArray = [
        ["./images/surf-instructor.png",1080,590,60,60],
        ["./images/lonboard-student.png", 1080,620,45, 100],
        ["./images/student-2.png", 1080,640,100, 45],
        ["./images/pelican1.png", 1080,640,45, 45],
        ["./images/pelican2.png", 1080,640,45, 45],
        ]

    if (gameArea.frames % 160 === 0) {
             let r = Math.floor(Math.random() * (obstacleArray.length +1))
        obstacles.push(new Character(obstacleArray[r][0], obstacleArray[r][1],obstacleArray[r][2],obstacleArray[r][3],obstacleArray[r][4]))
    }

}

//OBSTACULOS

const obstacles = []
// const instructor = new Image()
// instructor.src = "./images/surf-instructor.png"

// instructor.onload = function() {
//     ctx.drawImage(instructor,600,500,40,40)
// }
// new Object(25, 40, 200, 400)

// const longboard = new Image()
// longboard.src = "./images/lonboard-student.png"

// longboard.onload = function() {
//     ctx.drawImage(longboard,400,400,45, 100)
// }

// const longboard2 = new Image()
// longboard2.src = "./images/lonboard-student.png"

// longboard2.onload = function() {
//     ctx.drawImage(longboard2,800,400,45, 100)
// }

// INICIO DEL JUEGO
gameArea.start();





document.addEventListener("keydown",(e) => {

    switch(e.keyCode) {
        case 37:
            if (surfer.speedX > -6) {
                surfer.speedX -= 6
            } else {
                surfer.speedX += 0
            }
            break;
        case 39:
            if (surfer.speedX < 12) {
                surfer.speedX += 6
            } else {
                surfer.speedX += 0
            }
            break;
        case 38:
            if (surfer.speedY > - 6) {
                surfer.speedY -= 6
            } else {
                surfer.speedY += 0
            }
            break;
        case 40:
            if (surfer.speedY < 6) {
             surfer.speedY += 6
            } else {
                surfer.speedY += 0
            }
            break;
        default:
            return
    }
})