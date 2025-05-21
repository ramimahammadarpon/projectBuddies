import { createBrowserRouter } from "react-router";import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddTask from "../Pages/AddTask";
import PrivateRoute from "./PrivateRoute";
import BrowseTasks from "../Pages/BrowseTasks";
import TaskDetails from "../Pages/TaskDetails";
import MyPostedTask from "../Pages/MyPostedTask";
;

export const router = createBrowserRouter([
    {
        path: '/', 
        Component: HomeLayout,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/signup',
                Component:Signup
            },
            {
                path:'addTask',
                element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: 'browseTasks',
                element:<PrivateRoute><BrowseTasks></BrowseTasks></PrivateRoute>,
                loader: ()=>fetch('http://localhost:3000/tasks')
            },
            {
                path:'taskDetails/:id',
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/tasks/${params.id}`)
            },
            {
                path:'/myPostedTasks',
                element: <PrivateRoute><MyPostedTask></MyPostedTask></PrivateRoute>
            }
        ]
    }
])