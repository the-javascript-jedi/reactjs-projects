import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost from "./routes/NewPost/NewPost.jsx";
import Posts, { loader as postsLoader } from "./routes/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Posts />, loader: postsLoader },
      { path: "/create-post", element: <NewPost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
