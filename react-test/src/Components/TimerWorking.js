import React from "react";

const TimerWorking = () => {
  //for counter starting
  const [counterSecond, setCounterSecond] = React.useState(0);
  //for counter reverse
  const [counter, setCounter] = React.useState(120);
  //for displaying current counter time
  const [time, setTime] = React.useState("");
  //for setting status
  const [status, setStatus] = React.useState("working");

  React.useEffect(() => {
    let secondCounterId;
    let counterId;
    if (status === "working") {
      // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
      //positive counteer
      secondCounterId = setTimeout(
        () => setCounterSecond(counterSecond + 1),
        1000
      );
      //   negative counter
      counterId = setTimeout(() => setCounter(counter - 1), 1000);
    }
    // cleanup
    return () => {
      clearTimeout(counterId);
      clearTimeout(secondCounterId);
    };
    // run the effect based on the status message(working or paused)
  }, [counterSecond, counter, status]);

  // set the current time from positive countdown for displaying
  const handletimer = () => {
    setTime(counterSecond);
  };
  // pause the timers
  const stopTimers = () => {
    setStatus("paused");
  };
  // resume the timers
  const resume = () => {
    setStatus("working");
  };

  return (
    <div className="App">
      <div>Countdown: {counterSecond}</div>
      <div>Countdown Reverse: {counter}</div>
      {/* display the time after submission */}
      <div>time: {time} </div>
      {/* store the current time in countdown  */}
      <button onClick={handletimer}>Submit</button>
      {/* pause the timers */}
      <button onClick={stopTimers}>Stop</button>
      {/*resume the timers  */}
      <button onClick={resume}>resume</button>
    </div>
  );
};

export default TimerWorking;
