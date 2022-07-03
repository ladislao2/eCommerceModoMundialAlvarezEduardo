
import React from 'react'

const NavBar = () => {
  return (

    <nav  className="navbar navbar-expand-sm bg-light navbar-info text-align center">
      <a className="navbar-brand" href="#">
        Modo Mundial
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Fixture
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Equipos y jugadores Historicos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Balones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Indumentarias
          </a>
        </li>
        <li className="nav-item">
      <a className="nav-link" href="#">Contacto</a>
    </li>
      </ul>
    </nav>
  );
    }
  

export default NavBar;