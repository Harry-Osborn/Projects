import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "../src/routes/Root.jsx";
import Home from "../src/routes/Home.jsx";
import Suzuki from "./routes/individual_car_collection/suzuki/Suzuki.jsx";
import Login from "./routes/Login.jsx";
import SignUp from "./routes/SignUp.jsx";
import Fronx from "./routes/individual_car_collection/suzuki/individual_cars/fronx.jsx";
import Blogs from "./routes/Blogs.jsx";
import Blog_1 from "./routes/individual_blogs_collection/Blog_1.jsx";
import Accessories from "./routes/accessories.jsx";
import Bikes from "./routes/Bikes.jsx";
import Enfield from "./routes/individual_bikes_collection/enfield.jsx";
import SuperMeteor from "./routes/individual_bikes_collection/individual_bikes/SuperMeteor.jsx";
import Payment from "./routes/payment.jsx";
import Forgot from "./routes/forgot.jsx";
import ResetPassword from "./routes/resetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/suzuki",
    element: <Suzuki />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/reset/:token",
    element: <ResetPassword />,
  },
  {
    path: "/fronx",
    element: <Fronx />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blog_1",
    element: <Blog_1 />,
  },
  {
    path: "/shop",
    element: <Accessories />,
  },
  {
    path: "/bikes",
    element: <Bikes />,
  },
  {
    path: "/enfield",
    element: <Enfield />,
  },
  {
    path: "/supermeteor",
    element: <SuperMeteor />,
  },
  {
    path: "/pay",
    element: <Payment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
