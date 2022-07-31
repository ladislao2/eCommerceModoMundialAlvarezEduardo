import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../cartContext";
import React, { useContext } from "react";

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
