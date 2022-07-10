import React from "react";
import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";


const NavBar = () => {
  const onAdd = () => {
    console.log('click');
  };
  
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
        Pelotas
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#">
        Camisetas
      </a>
      <a className="flex-sm-fill text-sm-center nav-link " href="#">
        Contacto
      </a>
      
      <ItemCount stock={10} inicial={1} onAdd={onAdd}/>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;
