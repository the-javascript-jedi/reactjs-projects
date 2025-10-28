// css modules used
import classes from "./Post.module.css";
const Post = ({ author, body }) => {
  return (
    <div className={classes.post}>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
