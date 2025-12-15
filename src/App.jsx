import React from "react";
import Cardbek from "./Components/Cardbek.jsx";
import { Outlet } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail.jsx";



const App = () => {
  return <div>App
    <Cardbek/>
    <Outlet />
    <ProductDetail/>
  </div>;
};

export default App;
