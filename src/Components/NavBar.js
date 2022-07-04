
import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        <img
          className="logotipo"
          src="/images/Logo_3.png"
          width="150px"
          height="150px"
          alt="logo modo mundial"
        />
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        Historia de Los mundiales
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        Balones historicos
      </a>
      <a
        className="flex-sm-fill text-sm-center nav-link "
        href="#"
        tabindex="-1"
        aria-disabled="true"
      >
        Jugadores destacados
        
      </a>

      <CartWidget />
    </nav>
  );
    }
  

export default NavBar;