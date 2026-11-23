
let ballX = 300;
let ballY = 200;

let ballRadius = 25;

let speedX = 3;
let speedY = 2;

let speedMultiplier = 1;
let isPaused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  // Update the ball's position
  if (!isPaused) {
    ballX += speedX * speedMultiplier;
    ballY += speedY * speedMultiplier;

    // Bounce on the left and right edges
    if (ballX + ballRadius >= width) {
      ballX = width - ballRadius;
      speedX = -speedX;
    }

    if (ballX - ballRadius <= 0) {
      ballX = ballRadius;
      speedX = -speedX;
    }

    // Bounce on the top and bottom edges
    if (ballY + ballRadius >= height) {
      ballY = height - ballRadius;
      speedY = -speedY;
    }

    if (ballY - ballRadius <= 0) {
      ballY = ballRadius;
      speedY = -speedY;
    }
  }

  // Draw the ball
  fill(30, 144, 255);
  noStroke();
  circle(ballX, ballY, ballRadius * 2);

  // Display instructions
  fill(0);
  textSize(15);
  text("SPACE = Pause / Resume", 15, 25);
  text("+ = Increase Speed", 15, 45);
  text("- = Decrease Speed", 15, 65);

  text("Speed: " + speedMultiplier.toFixed(1), 15, 95);
  text(isPaused ? "PAUSED" : "PLAYING", 15, 120);
}

// Keyboard controls
function keyPressed() {
  if (key === ' ') {
    isPaused = !isPaused;
  }

  if (key === '+' || key === '=') {
    speedMultiplier += 0.5;
  }

  if (key === '-' && speedMultiplier > 0.5) {
    speedMultiplier -= 0.5;
  }
}
