import React, { useEffect, useState } from "react";
const IframeChild = () => {
  // state
  const [receivedMessage, setReceivedMessage] = useState("");
  // useEffect
  useEffect(() => {
    window.addEventListener("message", function (e) {
      // security
      if (e.origin !== "http://localhost:3000") return;
      setReceivedMessage("Got this message from parent", e.data);
    });
  }, []);
  // send message
  const sendMessage = () => {
    window.parent.postMessage("Hi Dad!", "http://localhost:3000");
  };
  return (
    <div>
      <h1>Child Iframe</h1>
      <p>{receivedMessage}</p>
      <button onClick={sendMessage}>Send Data to Parent</button>
    </div>
  );
};
export default IframeChild;
