import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";

export const routes = {
  home: {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  login: {
    name: "Sign In",
    path: "/login",
    component: <Login />,
  },
  register: {
    name: "Register",
    path: "/register",
    component: <Register />,
  },
  adminLogin: {
    name: "Admin Login",
    path: "/adminLogin",
    component: <AdminLogin />,
  }
}