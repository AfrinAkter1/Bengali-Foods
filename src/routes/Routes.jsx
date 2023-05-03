import { createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Resister from "../pages/Resister";
import ErrorPage from "../pages/Shared/ErrorPage";

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
              path:'/*',
              element:<ErrorPage></ErrorPage>
            }
         ]
    }
  ])

  export default router;