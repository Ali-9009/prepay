import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import './App.css';
import How_its_work from "./pages/How-its-work";
import StoreLocations from "./pages/StoreLocator";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NavPage from "./pages/NavPage";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/How-its-work", element: <How_its_work /> },
      { path: "/StoreLocator", element: <StoreLocations /> },
      { path: "/FAQ", element: <FAQ /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/NavPage", element: <NavPage /> },
    ],
  },
]);


export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
  );
}
