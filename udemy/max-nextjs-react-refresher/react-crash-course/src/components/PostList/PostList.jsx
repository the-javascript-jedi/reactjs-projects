import Post from "../Post/Post";
import classes from "./Postlist.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);

  //  we are using useLoaderData and making api calls in the router's loader function
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <li key={index}>
              <Post author={post.author} body={post.body} />
            </li>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};
export default PostList;
