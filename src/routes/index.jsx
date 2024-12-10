import { createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { Products } from "@pages/Products";
import { NotFound } from "@pages/NotFound";
import About from "@pages/About";
import { Login } from "@pages/auth/Login";
import Header from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      //   <PrivateRoute>
      <>
        <Header />
        <Products />
        <Footer />
      </>
      //   </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
