import "./App.css";
import Timer from "./Timer";
import React, { useState, useRef, useEffect } from "react";
const App = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Dec 31, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // get remainder of distance
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop the timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  // componentDidMount
  useEffect(() => {
    startTimer();
    var clear = interval.current;
    // cleanup
    return () => {
      clearInterval(clear);
    };
  });
  return (
    <div className="App">
      <section className="timer-container">
        <section className="timer">
          <div>
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Countdown Timer</h2>
            <p>Countdown to a really special date. </p>
          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
      <Timer />
    </div>
  );
};

export default App;
