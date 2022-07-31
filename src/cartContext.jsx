import { createContext, useEffect, useState } from "react"; //creamos nuestro contexto

export const CartContext = createContext();

const Provider = (props) => {
  //si o si creo un componente va a envolver toda mi app
  const [cart, setCart] = useState([]);
  const [suma, setSuma] = useState(0);
  // funcion para calcular el total de precio (unidades*precio)
  const totalCart = () => {
    let suma = 0;
    cart.forEach(item => (suma += item.Precio*item.Stock));
    setSuma(suma);
  };
  useEffect(() => {
    console.log(cart);
    totalCart();
  }, [cart]);

  const addToCart = (
    item, //este item tiene id asi que lo uso.
    cantidad //Mantener el orden primero poner el objeto y despues el Number
  ) => {
    if (isInCart(item.id)) {
      alert("ya esta en el carrito");
      //sumo la cantidad
    } else {
      setCart([...cart, { ...item, cantidad }]);
      //lo agrego al carrito
    }
  };

  const isInCart = (id) => {
    //por cada iteracion de cada producto voy a estar comparando id de este producto con el ide que me llega por parametro(id)
    return cart.some((item) => item.id === id); //el some me va a devolver un true o false
  };

  // funcion para calcular total de unidades



  //funcion que elimine a un producto en particular
  const deleteUno = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id); //filter se queda con todos los productos q no se ese id
    setCart(productosFiltrados);
    //setCart(cart.filter((prod) => prod.id !== id));
  };

  //funcion que borre todos los productos del carrito
  const deleteAll = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteAll, deleteUno, suma, }}
    >
      {props.children}
    </CartContext.Provider> // viajan los children aca, desde la app
  );
};

export default Provider; //exporto contexto
