import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddTask from "../Pages/AddTask";

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
                Component:AddTask
            }
        ]
    }
])