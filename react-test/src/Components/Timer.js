import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState();
  const [pauseTime, setPauseTime] = useState("");
  const textChangeHandler = (event) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    console.log("time", time);
  }, [time]);

  var paused;
  const startTimeHandler = () => {
    if (pauseTime === "") {
      setInterval(function () {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      setInterval(function () {
        setTime((pauseTime) => pauseTime - 1);
      }, 1000);
    }
  };

  const stopTimeHandler = () => {
    console.log("pauseTime", pauseTime);
    clearInterval(startTimeHandler);
    paused = setPauseTime(time);
  };

  return (
    <div>
      <h1>Timer</h1>

      <input type="text" onChange={textChangeHandler} />
      <button onClick={startTimeHandler}>Start Time</button>
      <button onClick={stopTimeHandler}>Stop Time</button>
      <p>{time}</p>
    </div>
  );
};

export default Timer;
