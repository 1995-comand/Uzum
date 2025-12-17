import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";

import App from "./App.jsx";
import Cardbek from "./Components/Cardbek.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";
import Karzina from "./Pages/Karzina.jsx";
import Izbrannoe from "./Pages/Izbrannoe.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import Loading from "./Components/Loading.jsx";
import UzumSeller from "./Pages/UzumSeller.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Cardbek />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "karzina",
        element: <Karzina />,
      },
      {
        path: "izbrannoe",
        element: <Izbrannoe />,
      },
    ],
  },
  {
    path: "/seller",
    element: <UzumSeller />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Suspense>
  </StrictMode>
);
