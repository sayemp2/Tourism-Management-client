import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";
import MyList from "../Pages/MyList/MyList";
import ViewDetails from "../Pages/viewDetails/ViewDetails";
import UpdateDetails from "../Pages/updateDetails/UpdateDetails";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import PrivateRoute from "../Layout/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          // Fetching data from both endpoints simultaneously
          const [countriesResponse, spotlistResponse] = await Promise.all([
            fetch('https://tourism-management-server-brown.vercel.app/countries'),
            fetch('https://tourism-management-server-brown.vercel.app/spotlist'),
          ]);


          const countries = await countriesResponse.json();
          const spotlist = await spotlistResponse.json();


          return { countries, spotlist };
        },
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
        element: <PrivateRoute> <AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: "/alltouristspot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('https://tourism-management-server-brown.vercel.app/spotlist')

      },
      {
        path: "/alltouristspot/:id",
        element: <ViewDetails></ViewDetails>,
    
      },
      {
        path: '/update/:id',
        element: <UpdateDetails></UpdateDetails>,
        loader: ({ params }) => fetch(`https://tourism-management-server-brown.vercel.app/spotlist/${params.id}`)
      }
      ,
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
    ]
  }
]);

export default router;