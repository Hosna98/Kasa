import logoKasa from "../assets/image/Desktop-Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logoKasa} alt="logo Kasa" />
      <nav>
        <ul>
          <NavLink to= "/Accueil" className={({isActive}) => (isActive ? "nav-underline" : "")}>
            <li>Acceuil</li>
          </NavLink>

          <NavLink to="/Apropos" className={({isActive}) => (isActive ? "nav-underline" : "")}>
            <li>A propos</li>
          </NavLink>
         
        </ul>
      </nav>
      
    </div>
  
  );
};

export default Header;