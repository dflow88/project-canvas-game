// IMPORTING THE CANVAS

const canvas = document.getElementById("main")
ctx = canvas.getContext("2d")


// STRUCTURE OF THE GAME AREA

const gameArea = {
    frames: 0,
    start: function () {
        this.interval = setInterval(updateGameArea,40)
    },
    clear: function() {
        ctx.clearRect(0,0, canvas.width, canvas.height)
    },
    stop: function () {
        clearInterval(this.interval)
    }
}

console.log(gameArea)

class Character {
    constructor(url, width, height, x, y) {
        this.image = new Image()
        this.image.src = url
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speedX = 0
        this.speedY = 0

    }


    update() {
        ctx.fillStyle = this.color
        ctx.fillRect = (this.x, this.y, this.width, this.height)
    }
}


// Motor
function updateGameArea(){
    gameArea.clear()
    surfer.newPos()
    surfer.update()
}


const surfer = new Character("./images/kid-surf-initial-pos.png", 70,70,100,250)
console.log(surfer)

//PARA DENTRO DEL ADD EVENT
// surfer.onload = function() {
//     ctx.drawImage(surfer,100,250,70,70)
// }


// Crear surfer

// const surfer = new Image()
// surfer.src = "./images/kid-surf-initial-pos.png"


// surfer.onload = function() {
//     ctx.drawImage(surfer,100,250,70,70)
// }


const instructor = new Image()
instructor.src = "./images/surf-instructor.png"


instructor.onload = function() {
    ctx.drawImage(instructor,600,500,40,40)
}
// new Object(25, 40, 200, 400)


const longboard = new Image()
longboard.src = "./images/lonboard-student.png"


longboard.onload = function() {
    ctx.drawImage(longboard,400,400,45, 100)
}

const longboard2 = new Image()
longboard2.src = "./images/lonboard-student.png"


longboard2.onload = function() {
    ctx.drawImage(longboard2,800,400,45, 100)
}