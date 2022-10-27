import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Course from "../Pages/Course/Course";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import SingleCourse from "../Pages/SingleCourse/SingleCourse";
import Premimu from "../Pages/Premium/Premimu";
import Faq from "../Pages/Faq/Faq";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
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
        path: "/faq",
        element: (
          <PrivateRoute>
            <Faq></Faq>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
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
      {
        path: "/courseDetails/:id",
        element: (
          <PrivateRoute>
            <SingleCourse></SingleCourse>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/premiumAccess/:id",
        element: (
          <PrivateRoute>
            <Premimu></Premimu>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
]);
