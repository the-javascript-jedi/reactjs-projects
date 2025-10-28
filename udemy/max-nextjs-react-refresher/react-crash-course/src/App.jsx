import Post from "./components/Post";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Post author={"nithin"} body="reactjs" />
      <Post author={"batman"} body="python" />
      <Post author={"superman"} body="angular" />
    </>
  );
}

export default App;
