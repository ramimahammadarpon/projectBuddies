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
import ErrorPage from "../Pages/ErrorPage";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import DeveloperResources from "../Pages/DeveloperRousources";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: ()=>fetch("https://b11-a10-server-side.vercel.app/featuredTasks"),
        hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>)

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element:<Signup></Signup>,
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
        element: (<BrowseTasks></BrowseTasks>),
        loader: () => fetch("https://b11-a10-server-side.vercel.app/tasks"),
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
          fetch(`https://b11-a10-server-side.vercel.app/tasks/${params.id}`),
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
        loader: () => fetch("https://b11-a10-server-side.vercel.app/tasks"),
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
          fetch(`https://b11-a10-server-side.vercel.app/tasks/${params.id}`),
         hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>)
      },
      {
        path: 'myPostedTasks/bids/:id',
        element: <PrivateRoute><Bids></Bids></PrivateRoute>,
        loader: ()=> fetch("https://b11-a10-server-side.vercel.app/bids"),
         hydrateFallbackElement: (
          <div className="min-h-[70vh] flex justify-center items-center">
            <span className="loading loading-spinner w-12"></span>
          </div>)
      },
      {
        path: 'termsAndServices',
        Component: Terms
      },
      {
        path: 'privacyAndPolicy',
        Component: Privacy
      },
      {
        path: 'developerResources',
        Component: DeveloperResources
      }
    ],
  },
  {
    path: '/*',
    element:<ErrorPage></ErrorPage>
  }
]);
