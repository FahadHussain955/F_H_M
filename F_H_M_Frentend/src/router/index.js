import Login from "../pages/login.js";
import SignUp from "../pages/sign-up.js";
import Home from "../pages/dashboard.js";
import Page404 from "../pages/no-data-found.js";
import User from "../pages/User.js";

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
    path: "/user",
    pages: User,
    requiredPermission: "manage_users",
  },

  {
    path: "*",
    pages: Page404,
  },
];

export default routes;
