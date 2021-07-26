import React, { useRef, useEffect, useState } from "react";
const IframeParent = () => {
  // create ref
  const iFrameRef = useRef(null);
  // send message from parent to child
  const sendMessage = () => {
    //   check if iFrame is present
    if (!iFrameRef.current) {
      return;
    }
    iFrameRef.current.contentWindow.postMessage(
      "Hello Son!",
      "http://localhost:3000/"
    );
  };
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
  return (
    <div>
      <h1>IFrameParent</h1>
      <button onClick={sendMessage}>Send Message to Child</button>
      <br />
      <br />
      <iframe
        ref={iFrameRef}
        src="/iframe-child/"
        width="600"
        height="300"
        title="Child iFrame"
      ></iframe>
      <br />
      <p>{receivedMessage}</p>
    </div>
  );
};
export default IframeParent;
