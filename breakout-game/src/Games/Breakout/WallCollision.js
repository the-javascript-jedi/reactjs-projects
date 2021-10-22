function WallCollision(ballObj, canvas) {
  //wall collision top && bottom
  //top - ballObj.y - ballObj.rad < 0
  //bottom - ballObj.y + ballObj.rad > canvas.height
  if (ballObj.y - ballObj.rad < 0 || ballObj.y + ballObj.rad > canvas.height) {
    ballObj.dy *= -1;
  }
  //wall collision left && right
  //right - ballObj.x + ballObj.rad >= canvas.width - if x axis of ball + the ball radius > canvas.width
  //left - ballObj.rad <= 0
  if (ballObj.x + ballObj.rad >= canvas.width || ballObj.x - ballObj.rad <= 0) {
    ballObj.dx *= -1;
  }
}
export default WallCollision;
