import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const title = "Blog Post";
  const body = "This is a blog post about React.";
  const comments = [
    { id: 1, text: "Great post!" },
    { id: 2, text: "Very informative." },
    { id: 3, text: "I learned a lot." },
  ];

  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
