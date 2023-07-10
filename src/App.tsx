import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ShopsList from "./pages/ShopsList";
import ShopRegister from "./pages/ShopRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/cafe",  // coffeeshop으로 수정
        element: <ShopsList />,
      },
      {
        path: "/cafe/register",
        element: <ShopRegister />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
