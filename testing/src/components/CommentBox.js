import React, { useState } from "react";
const CommentBox = () => {
  // state
  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", comment);
    setComment("");
    // TODO call and action creator and save the comment
  };
  //   textare handlechange
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Comment Box</h4>
      <h4>Add a Comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};
export default CommentBox;
