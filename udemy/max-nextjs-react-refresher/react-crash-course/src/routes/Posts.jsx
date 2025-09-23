import PostList from "../components/PostList/PostList";
import { useState } from "react";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
// this function will be executed on the routes - to make api call when routing
export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
