import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Cardbek from "./Components/Cardbek.jsx";

function App() {
  return (
    <>
      <Header />
 
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
