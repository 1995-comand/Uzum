import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Cardbek from "./Components/Cardbek.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";

import TopshirishPunktlari from "./Page/TopshirishPunktlari.jsx";
import Vakansiyalar from "./Page/Vakansiyalar.jsx";
import Boglanish from "./Page/Boglanish.jsx";
import FAQ from "./Page/FAQ.jsx";
import Sotish from "./Page/Sotish.jsx";
import SotuvchiKabinet from "./Page/SotuvchiKabinet.jsx";
import PunktOchish from "./Page/PunktOchish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Cardbek /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "points", element: <TopshirishPunktlari /> },
      { path: "vacancies", element: <Vakansiyalar /> },
      { path: "contact", element: <Boglanish /> },
      { path: "faq", element: <FAQ /> },
      { path: "sell", element: <Sotish /> },
      { path: "seller", element: <SotuvchiKabinet /> },
      { path: "open-point", element: <PunktOchish /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
