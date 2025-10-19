import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AuthLayOut from "../Layout/AuthLayOut";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }


        ]
    }
]);