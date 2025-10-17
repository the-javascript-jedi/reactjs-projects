const data = {
  ballObj: {
    //
    x: 20,
    y: 200,
    //dx is addition to x
    dx: 5,
    //dy is addition to y
    dy: 5,
    //radius of ball
    rad: 20,
    //speed of ball
    speed: 20,
  },
  brickObj: {
    x: 0.5,
    y: 50,
    height: 20,
    density: 2,
    colors: ["red", "lightblue"],
  },
  player: {
    name: "Dhaval",
    lives: 5,
    score: 0,
    level: 1,
  },
  paddleProps: {
    height: 20,
    width: 100,
    x: 100,
    color: "orange",
  },
};
export default data;
