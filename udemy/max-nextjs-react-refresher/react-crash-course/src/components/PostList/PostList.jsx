import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./Postlist.module.css";
import { useState } from "react";

const PostList = () => {
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
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
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
