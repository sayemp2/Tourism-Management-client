import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('https://tourism-management-server-brown.vercel.app/countries')
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/addtouristspot",
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: "/alltouristspot",
        element:<AllTouristSpot></AllTouristSpot>,
        loader:()=>fetch('https://tourism-management-server-brown.vercel.app/spotlist')
      }
    ]
  },
]);

export default router;