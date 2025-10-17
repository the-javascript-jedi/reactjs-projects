import React, { useRef, useEffect } from "react";
import { BallMovement } from "./BallMovement";
import WallCollision from "./WallCollision";
import data from "../../data";
import Paddle from "./Paddle";
import Brick from "./Brick";
//access data props
let { ballObj, paddleProps, brickObj } = data;
//
let bricks = [];
function Board() {
  const canvasRef = useRef(null);
  //   useEffect
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      //Assign Bricks
      let newBrickSet = Brick(2, bricks, canvas, brickObj);
      //if bricks are returned from the Brick function
      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }
      //clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //display the bricks in canvas
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      //pass the canvas context and ballObj data
      BallMovement(ctx, ballObj);
      //Wall Collision
      WallCollision(ballObj, canvas);
      //paddle
      Paddle(ctx, canvas, paddleProps);
      //call the animation function
      requestAnimationFrame(render);
    };
    render();
  });
  return (
    <div>
      <canvas
        id="canvas"
        ref={canvasRef}
        height="500px"
        width="800px"
        onMouseMove={(event) =>
          // paddleProps.width / 2 is added to position cursor in center
          (paddleProps.x = event.clientX - paddleProps.width / 2)
        }
      />
    </div>
  );
}

export default Board;
