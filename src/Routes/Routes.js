import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Course from "../Pages/Course/Course";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/courses"),
      },
    ],
  },
]);
