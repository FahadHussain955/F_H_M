import Login from "../pages/login.js";
import SignUp from "../pages/sign-up.js";
import Home from "../pages/dashboard.js";
import ForgetPassword from "../pages/forget-password.js";
import ResetPassword from "../pages/reset-password.js";


import Page404 from "../pages/no-data-found.js";

const routes = [
  {
    path: "/",
    pages: () => <Home />,
  },
  {
    path: "/login",
    pages: () => <Login />,
    isPublic: true,
  },
  {
    path: "/signup",
    pages: SignUp,
    isPublic: true,
  },
  {
    path: "/forget-password",
    pages: ForgetPassword,
    isPublic: true,
  },
  {
    path: "/reset-password/:en",
    pages: ResetPassword,
    isPublic: true,
  },

  // {
  //   path: "/customer",
  //   pages: Customer,
  //   requiredPermission: "manage_users",
  // }


  {
    path: "*",
    pages: Page404,
  },

];

export default routes;
