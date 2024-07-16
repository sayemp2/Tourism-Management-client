import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },

        {
          path:"/signin",
          element:<SignIn></SignIn>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;