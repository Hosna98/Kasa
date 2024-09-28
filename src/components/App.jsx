import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Location from "../pages/Location";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Acceuil" element={<Home />} />
        <Route path="/Apropos" element={<About />} />
        <Route parh="/Location"element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;