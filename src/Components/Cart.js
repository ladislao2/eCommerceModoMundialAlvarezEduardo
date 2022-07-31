import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";

const Cart = () => {
  //const valores = useContext(CartContext)
  //console.log(valores.Cart)
  const { cart, deleteAll, deleteUno, suma } = useContext(CartContext);
  if(cart.lenght === 0){
    return(
      <h2>AUN NO HAY PRODUCTOS PARA MOSTRAR, VOLVER AL <Link to="/">Home</Link>
      </h2>
    );
  }
  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <img src={prod.img} width="70px" />
          <div>
            <h2>{prod.name}</h2>
            
            <h3>${prod.Precio}</h3>
          </div>
          <button onClick={()=>deleteUno(prod.id)}>Eliminar</button>
        </div>
      ))}
      
      <h4>Total:${suma}</h4>
      <button onClick={deleteAll}>Vaciar Carrito</button>
    </div>
  );
};
export default Cart;
