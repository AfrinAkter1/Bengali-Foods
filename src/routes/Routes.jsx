import { createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";

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
            }
         ]
    }
  ])

  export default router;