import React, { useState } from "react";
import { connect } from "react-redux";
// import action directory
import * as actions from "actions";
const CommentBox = (props) => {
  // state
  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", comment);
    // we get the action and existing state as props when we wire up connect
    props.saveComment(comment);
    setComment("");
    // TODO call and action creator and save the comment
  };
  //   textare handlechange
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Comment Box</h4>
        <h4>Add a Comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      {/*props.fetchComments() is received from the redux action */}
      <button className="fetch-comments" onClick={() => props.fetchComments()}>
        Fetch Comments{" "}
      </button>
    </div>
  );
};
// connect receives 2 arguments
// first argument is mapStateToProps - current scenario we don't need access to existing state so null
//second argument receives the action creator
export default connect(null, actions)(CommentBox);
