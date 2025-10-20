import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import Modal from "../Modal/Modal";
import classes from "./Postlist.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal OnClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ol className={classes.posts}>
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
