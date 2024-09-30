


import { NavLink } from "react-router-dom";

const E404 = () => {
  return (
    <div className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ul>
        <li>
          <NavLink to="/Acceuil">Retourner sur la page d’accueil</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default E404;