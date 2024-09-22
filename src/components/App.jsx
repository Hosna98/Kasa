



import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Acceuil" element={<Home />} />
        <Route path="/Apropos" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;