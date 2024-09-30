import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Location from "../pages/Location";
import E404 from "../pages/E404";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Acceuil" element={<Home />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="/Location/:id"element={<Location />} />
        <Route path="*"element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;