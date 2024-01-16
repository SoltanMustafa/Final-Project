import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "./layouts/Main/MainLayouts";
import HomePage from "./layouts/Main/pages/home/HomePage";
import ProductDetail from "./layouts/Main/pages/ProductDetail/ProductDetail";
import AuthLayouts from "./layouts/Auth/AuthLayouts";
import CartPage from "./layouts/Main/pages/Cart/CartPage";
import ShopPage from "./layouts/Main/pages/Shop/ShopPage";
import Login from "./layouts/Auth/pages/Login/Login";
import Register from "./layouts/Auth/pages/Register/Register";
import CheckOut from "./layouts/Main/pages/Checkout/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayouts />,
    children: [
      {
        path: "auth",
        element: <Navigate to={"login"} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default function MainRouter() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
