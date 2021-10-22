import React, { useRef, useEffect } from "react";
import { BallMovement } from "./BallMovement";
import WallCollision from "./WallCollision";
import data from "../../data";
function Board() {
  const canvasRef = useRef(null);
  //   useEffect
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      //access ballObj from data
      let { ballObj } = data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //pass the canvas context and ballObj data
      BallMovement(ctx, ballObj);
      //Wall Collision
      WallCollision(ballObj, canvas);
      //call the animation function
      requestAnimationFrame(render);
    };
    render();
  });
  return (
    <div>
      <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
    </div>
  );
}

export default Board;
