import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import Modal from "../Modal/Modal";
import classes from "./Postlist.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const PostList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal OnClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ol className={classes.posts}>
        <li>
          <Post author={enteredAuthor} body={enteredBody} />
        </li>
        <li>
          {" "}
          <Post author={"batman"} body="python" />
        </li>
        <li>
          {" "}
          <Post author={"superman"} body="angular" />{" "}
        </li>
      </ol>
    </>
  );
};
export default PostList;
