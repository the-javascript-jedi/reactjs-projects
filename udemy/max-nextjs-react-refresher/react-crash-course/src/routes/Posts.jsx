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
