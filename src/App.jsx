import React from "react";
import Cardbek from "./Components/Cardbek.jsx";
import { Outlet } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail.jsx";
import Header from "./Components/Header.jsx";



const App = () => {
  return <div>App
      <Header/>
    <Cardbek/>
    <Outlet />
    <ProductDetail/>
  
  </div>;
};

export default App;
