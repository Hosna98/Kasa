import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


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