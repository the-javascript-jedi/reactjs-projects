import React from "react";
import { connect } from "react-redux";
const CommentList = ({ comments }) => {
  const renderComments = () => {
    console.log("state.comments", comments);
    return comments.map((comment) => {
      console.log("comment", comment);
      return <li key={comment}>{comment}</li>;
    });
  };
  return (
    <div>
      <h4>Comment List</h4>
      <div>
        <ul>{renderComments()}</ul>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  // state.comments comes from combineReducers key value
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);
