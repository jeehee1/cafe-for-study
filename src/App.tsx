import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import ShowShops from "./components/shops/ShowShops";
import ShopsList from "./pages/ShopsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: "coffeeshops", element:<ShopsList/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
