import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Perfil
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/quotes">
            Frases Celebres
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
