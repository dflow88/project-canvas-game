function newLiveImage() {
    for (i = 0; i < surfer.lives; i++) {
      livesImages.push(
          new Character(liveImageArray[0],canvas.width - liveImageArray[3]/2 -(liveImageArray[3]+5)*3 + (liveImageArray[3]+5) * i, 70,liveImageArray[3],liveImageArray[4],liveImageArray[5])
        )
        livesImages[i].update()
    }
  }
  
  let goal = 0
  
  function scoreNumber() {
  ctx.font = "50px Pacifico";
  ctx.fillStyle = "#30837E";
  ctx.textAlign = "center";
  ctx.fillText(goal, canvas.width - 35, 45)
  }
  
  // function newBubble() {
  //     if (instructors[0].x == 600) {
  //       bubbles.push(
  //         // new Character(bubbleArray[0],instructors[i].x+instructors[i].width,instructors[i].y + 5, 60,30,'bubble')
  //         new Character(bubbleArray[0],instructors[0].x,instructors[0].y,instructors[0].width, instructors[0].height,'bubble')
  //       )
  //       bubbles[0].update
  //     }
  // }
  
  function newInstructor() {
    for (i = 0; i < instructors.length; i++) {
        if (goal == goal) {
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
        }
        // if (goal <= 6) {
        //   if (instructors[i].y < 300) {
        //     instructors[i].x -= 1.5;
        //     instructors[i].y -= 1.5;
        // } else if (instructors[i].y < 400) {
        //     instructors[i].x -= 1.5;
        //     instructors[i].y -= 0.75;
        // } else if (instructors[i].y < 500) {
        //     instructors[i].x -= 1.5;
        //     instructors[i].y -= 0.375;
        // } else {
        //     instructors[i].x -= 1.5;
        //     instructors[i].y -= 0.225;  
        //   }
        // }
  
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
        if (goal == goal) {
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
        }
        // if (goal >3) {
        //   if (obstacles[i].y < 300) {
        //       obstacles[i].x -= 1.5;
        //       obstacles[i].y -= 1.5;
        //   } else if (obstacles[i].y < 400) {
        //       obstacles[i].x -= 1.5;
        //       obstacles[i].y -= 0.75;
        //   } else if (obstacles[i].y < 500) {
        //       obstacles[i].x -= 1.5;
        //       obstacles[i].y -= 0.375;
        //   } else {
        //       obstacles[i].x -= 1.5;
        //       obstacles[i].y -= 0.225;  
        //   }
        // }
        // if (goal <=3) {
        //   if (obstacles[i].y < 300) {
        //       obstacles[i].x -= 1.2;
        //       obstacles[i].y -= 1.2;
        //   } else if (obstacles[i].y < 400) {
        //       obstacles[i].x -= 1.2;
        //       obstacles[i].y -= 0.6;
        //   } else if (obstacles[i].y < 500) {
        //       obstacles[i].x -= 1.2;
        //       obstacles[i].y -= 0.3;
        //   } else {
        //       obstacles[i].x -= 1.2;
        //       obstacles[i].y -= 0.18;  
        //   }
        // }
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
  
      if (goal <=3) {
        if (gameArea.frames2 % 200 === 0) {
        obstacles.push(
            new Character(obstacleArray[r1][0],canvas.width-obstacleArray[r1][3], rY1,obstacleArray[r1][3],obstacleArray[r1][4],"y"
            )
          );
        }
        if (gameArea.frames2 % 233 === 0) {
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
      if (goal >3) {
        if (gameArea.frames2 % 160 === 0) {
        obstacles.push(
            new Character(obstacleArray[r1][0],canvas.width-obstacleArray[r1][3], rY1,obstacleArray[r1][3],obstacleArray[r1][4],"y"
            )
          );
        }
        if (gameArea.frames2 % 187 === 0) {
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
      if (goal >6) {
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
  }
  
  // function newLivesImage() {
  //   const livesImage = new Image
  // livesImage.src = "./images/lives.png"
  //   livesImage.onload = () => {
  //     for (i = 0; i < surfer.lives; i++) {
  //       ctx.drawImage(livesImage, canvas.width - 240 +40 * i, 10, 36, 54)
  //         // drawImage(livesImageArray[0],canvas.width-livesImageArray[3] *10 + i*livesImageArray[3] +5, livesImageArray[2],livesImageArray[3],livesImageArray[4],livesImageArray[5]
  //         // )
  //     }
  //   }
  // }
  
  // let lives = 3
  // let blinkFrames = 0
  
  function crashes() {
    for (let i = 0; i < obstacles.length; i++) {
      if (
        surfer.x + surfer.width -15 > obstacles[i].x &&
        surfer.x + 15 < obstacles[i].x + obstacles[i].width &&
        surfer.y + surfer.height - 20 > obstacles[i].y &&
        surfer.y + 20 < obstacles[i].y + obstacles[i].height
      ) {
  
        audioElementCollision.play()
        surfer.lives--
        surfer.blinkFrames = 100
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
        if (surfer.lives < 3){
        surfer.lives++
        audioElementChocolate.play()
        }
        chocolates.splice(i,1)
        // blinkTime()
      } //else {
      // }
    }
  }
  
  const youWin = document.getElementById("you-win")
  
  function runOverWin() {
    for (let i = 0; i < instructors.length; i++) {
      if (
        surfer.x + surfer.width -15 > instructors[i].x &&
        surfer.x + 15 < instructors[i].x + instructors[i].width &&
        surfer.y + surfer.height - 20 > instructors[i].y &&
        surfer.y + 20 < instructors[i].y + instructors[i].height
      ) {
  
        audioElementInstructor.play()
        goal++
        instructors.splice(i,1)
  
      if (goal == 10) {
        ctx.clearRect(canvas.width - 50, 10,35,45)
        scoreNumber()
        audioElementMain.pause()
        setTimeout(function(){audioElementWin1.play()},500)
        setTimeout(function(){audioElementWin2.play()},900)
        setTimeout(function(){audioElementWin3.play()},1400)
        gameArea.stop();
        canvas.style.display = 'none'
        youWin.style.display = 'block'
        youWin.style.display = 'flex'
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
  
  const youLose = document.getElementById("you-lose")
  
  function gameOver() {
  
    if (surfer.blinkFrames === 0) {
      crashes()
    } else {
      surfer.blinkFrames--
    }
    if (surfer.lives <= 0) {
      audioElementMain.pause()
      audioElementLose.play()
      ctx.clearRect(canvas.width - 120, 60,70,60)
      gameArea.stop();
      canvas.style.display = 'none'
      youLose.style.display = 'block'
      youLose.style.display = 'flex'
    }
  }
  
  // function restart(){
  //   gameArea.frames1 = 0
  //   gameArea.frames2 = 0
  //   gameArea.frames3 = 0
  //   this.speedX = 0;
  //   this.speedY = 0;
  //   this.x = 0;
  //   this.y = 0;
  //   this.width = 0;
  //   this.height = 0;
  //   this.type = 0
  //   surfer.lives = 3
  //   this.blinkFrames = 0
  //   this.blink = false
  //   goal = 0
  // }
  