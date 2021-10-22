import React, { useRef, useEffect } from "react";
import { BallMovement } from "./BallMovement";
import WallCollision from "./WallCollision";
import data from "../../data";
import Paddle from "./Paddle";
//access data props
let { ballObj, paddleProps } = data;
function Board() {
  const canvasRef = useRef(null);
  //   useEffect
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
