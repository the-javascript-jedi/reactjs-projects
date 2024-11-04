import React, { useState, useEffect } from "react";
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = padZero(time.getHours());
    const minutes = padZero(time.getMinutes());
    const seconds = padZero(time.getSeconds());
    const meridiem = hours >= 12 ? "PM" : "AM";

    return `${hours}:${minutes}:${seconds}:${meridiem}`;
  }

  // if number is a single digit convert it into a double digit
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div>
      <>
        <p>DigitalClock</p>
        <div className="clock-container">
          <div className="clock">
            <span>{formatTime()}</span>
          </div>
        </div>
      </>
    </div>
  );
};
export default DigitalClock;
