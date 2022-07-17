import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <Link to="/" className="flex-sm-fill text-sm-center nav-link" href="/">
        <img
          className="logotipo"
          src="/images/Logo_3.png"
          width="150px"
          height="150px"
          alt="logo modo mundial"
        />
      </Link>
      <NavLink to="/About" className="flex-sm-fill text-sm-center nav-link" >
        About
      </NavLink>
      
      <NavLink to="/Contacto" className="flex-sm-fill text-sm-center nav-link " >
        Contacto
      </NavLink>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
