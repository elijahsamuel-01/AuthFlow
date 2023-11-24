import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Sign_in from "../pages/Sign_in";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import RegisterBroMo from "../pages/auth/BroMoRegister";
import RegisterFreeMo from "../pages/auth/FreeMoRegister";
import LandingPage from "../pages/Hero";
import GetStarted from "../pages/GetStarted";
import { Layout } from "../components/Layout";
export const mainRouter = createBrowserRouter([
  {
    path: "/la",
    element: <GetStarted />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),

    children: [
      {
        index: true,
        element: <HomeScreen />,
        // path: "/:ID",
      },
      // {
      //   index: true,
      //   path: "/dark",
      //   element: <HomeScreen />,
      // },
    ],
  },

  {
    path: "/la/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/la/login",
    element: <Login />,
  },
  {
    path: "/register-freemo",
    element: <RegisterFreeMo />,
  },
  {
    path: "/register-bromo",
    element: <RegisterBroMo />,
  },
]);
