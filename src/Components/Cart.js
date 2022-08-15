import { addDoc, collection, getFirestore } from "firebase/firestore";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";

const Cart = () => {
  //const valores = useContext(CartContext)
  //console.log(valores.Cart)
  const { cart, deleteAll, deleteUno, totalCart } = useContext(CartContext);

  const order = {
    buyer: {
      name: "eduardo",
      email: "eduardo@gmail.com",
      phone: "1130959554",
      address: "avellaneda 1938",
    },
    items: cart.map((productos) => ({
      id: productos.id,
      name: productos.name,
      Precio: productos.Precio,
      cantidad: productos.cantidad,
    })),
    total: totalCart(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

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

      <button onClick={handleClick}>Emitir orden</button>
    </div>
  );
};
export default Cart;
