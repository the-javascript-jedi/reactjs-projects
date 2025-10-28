import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      {/* <Post author={"nithin"} body="reactjs" />
      <Post author={"batman"} body="python" />
      <Post author={"superman"} body="angular" /> */}
      <PostList />
    </>
  );
}

export default App;
