import React from "react";
import { useState, useEffect } from "react";
function Timer() {
  var minutesToAdd = 30;
  const [time, setTime] = useState(0);
  const [displayTime, setDisplayTime] = useState(0);
  //set time to midnight
  useEffect(() => {
    var midNight = new Date(new Date().setHours(0, 0, 0, 0));
    console.log(midNight);
    // console.log(formatAMPM(midNight));
    setTime(midNight);
    setDisplayTime(formatAMPM(midNight));
  }, []);
  //   increment time by 30 minutes
  const incrementTime = () => {
    var currentDate = time;
    var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
    console.log("futureDate", futureDate);
    setTime(futureDate);
    setDisplayTime(formatAMPM(futureDate));
  };
  //   decrement time by 30 minutes
  const decrementTime = () => {
    var currentDate = time;
    var pastDate = new Date(currentDate.getTime() - minutesToAdd * 60000);
    console.log("pastDate", pastDate);
    setTime(pastDate);
    setDisplayTime(formatAMPM(pastDate));
  };
  //format date and time
  // 9/1/2021 12:00:0 AM
  function formatAMPM(date) {
    var strTime;
    // var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return (strTime =
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getFullYear() +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      ampm);
  }
  const textChangeHandler = (event) => {
    setDisplayTime(event.target.value);
  };

  return (
    <div>
      {/* <input value={displayTime} /> */}
      <input type="text" value={displayTime} onChange={textChangeHandler} />
      <p>{displayTime}</p>
      <button onClick={incrementTime}>Increment</button>
      <button onClick={decrementTime}>Decrement</button>
    </div>
  );
}
export default Timer;
