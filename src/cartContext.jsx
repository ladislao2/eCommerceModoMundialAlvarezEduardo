import { createContext, useEffect, useState } from "react"; //creamos nuestro contexto

export const CartContext = createContext();

const Provider = (props) => {
  //si o si creo un componente va a envolver toda mi app
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (
    item, //este item tiene id asi que lo uso.
    cantidad //Mantener el orden primero poner el objeto y despues el Number
  ) => {
    if(isInCart(item.id)){
        alert('ya esta en el carrito');
        //sumo la cantidad
    } else {
        setCart([...cart, {...item, cantidad}]);
        //lo agrego al carrito
  }

};

const isInCart =(id) => { //por cada iteracion de cada producto voy a estar comparando id de este producto con el ide que me llega por parametro(id)
    return cart.some((item) => item.id === id);//el some me va a devolver un true o false
}

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
  
      //*Voy a proveer de datos a todos los componentes que quiera. debo tener
      el value para pasar parametros a sus hijos.
      {props.children} 
    </CartContext.Provider> // viajan los children aca, desde la app
  );
};

export default Provider; //exporto contexto
