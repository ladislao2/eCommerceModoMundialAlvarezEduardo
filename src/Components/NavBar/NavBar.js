import React from "react";
import CartWidget from "../Cart+CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

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
      <NavLink
        to="/categorias/Pelota"
        className="flex-sm-fill text-sm-center nav-link"
      >
        Pelotas
      </NavLink>

      <NavLink
        to="/categorias/Camiseta"
        className="flex-sm-fill text-sm-center nav-link "
      >
        Camisetas
      </NavLink>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
    </nav>
  );
};

export default NavBar;
