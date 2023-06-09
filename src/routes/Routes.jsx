import { createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Resister from "../pages/Resister";
import ErrorPage from "../pages/Shared/ErrorPage";
import ViewRecepi from "../pages/ViewRecepi";
import PrivetRoute from "./PrivetRoute";

  const router = createBrowserRouter([
    {
         path: '/',
         element: <Main></Main>,
         children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/resister',
              element:<Resister></Resister>
            },
            {
              path:'/view/:id',
              element: <PrivetRoute><ViewRecepi></ViewRecepi></PrivetRoute>,
              loader:({params}) => fetch(`https://assignment10-server-afrinakter1.vercel.app/recepis/${params.id}`)
            },
            {
              path:'/*',
              element:<ErrorPage></ErrorPage>
            }
         ]
    }
  ])

  export default router;