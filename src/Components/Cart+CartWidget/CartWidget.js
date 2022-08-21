import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../Context/cartContext";
import React, { useContext } from "react";
import "./Cartwidget.css"

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <button>
        <TiShoppingCart className="button cartWidget" />
      </button>
      <p>{cart.length}</p>
    </div>
  );
};

export default CartWidget;
