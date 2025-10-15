import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./Postlist.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ol className={classes.posts}>
        <li>
          <Post author={"nithin"} body="reactjs" />
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
