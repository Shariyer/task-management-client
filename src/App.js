/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Add from "./components/Add/Add";
import Complete from "./components/Complete/Complete";
import MyTask from "./components/MyTask/MyTask";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/mytasks",
          element: <MyTask />,
        },
        {
          path: "/complete",
          element: <Complete />,
        },
        {
          path: "/add",
          element: <Add />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
