import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddTask from "../Pages/AddTask";
import PrivateRoute from "./PrivateRoute";
import BrowseTasks from "../Pages/BrowseTasks";
import TaskDetails from "../Pages/TaskDetails";
import MyPostedTask from "../Pages/MyPostedTask";
import UpdateTask from "../Pages/UpdateTask";
import Bids from "../Pages/Bids";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=>fetch("http://localhost:3000/featuredTasks"),
        hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>)

      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "addTask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "browseTasks",
        element: (
          <PrivateRoute>
            <BrowseTasks></BrowseTasks>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/tasks"),
        hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>
        ),
      },
      {
        path: "taskDetails/:id",
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
        hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>
        ),
      },
      {
        path: "myPostedTasks",
        element: (
          <PrivateRoute>
            <MyPostedTask></MyPostedTask>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/tasks"),
        hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>
        ),
      },
      {
        path: "myPostedTasks/update/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
      },
      {
        path: 'myPostedTasks/bids/:id',
        element: <PrivateRoute><Bids></Bids></PrivateRoute>,
        loader: ()=> fetch("http://localhost:3000/bids")
      }
    ],
  },
]);
