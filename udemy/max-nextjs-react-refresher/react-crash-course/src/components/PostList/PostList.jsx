import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import Modal from "../Modal/Modal";
import classes from "./Postlist.module.css";
import { useState } from "react";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
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
