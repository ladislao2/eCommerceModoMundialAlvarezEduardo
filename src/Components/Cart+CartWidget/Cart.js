

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

const Cart = () => {
  //const valores = useContext(CartContext)
  //console.log(valores.Cart)
  const { cart, deleteAll, deleteUno, totalCart } = useContext(CartContext);

  

  if (cart.lenght === 0) {
    return (
      <h2>
        AUN NO HAY PRODUCTOS PARA MOSTRAR, VOLVER AL <Link to="/">Home</Link>
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
          <button onClick={() => deleteUno(prod.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={deleteAll}>Vaciar Carrito</button>
      <h4>Total:${totalCart()} </h4>

      <Link to="/Checkout">Confirmar compra</Link>
    </div>
  );
};
export default Cart;
