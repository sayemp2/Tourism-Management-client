import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/signin",
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;