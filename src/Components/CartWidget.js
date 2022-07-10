import React from "react";
import { TiShoppingCart } from "react-icons/ti";
const CartWidget = () => {
  return (
    <div>
      <button>
        <TiShoppingCart className="button cartWidget" />
      </button>
    </div>
  );
};

export default CartWidget;
