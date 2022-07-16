import React, { useState } from "react";
import App from "../App";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrementar = () => {
    if (count > inicial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="cajaBotonera">
        <button className="botonIncrementar" onClick={incrementar}>+</button>
        <p>{count}</p>
        <button className="botonDecrementar" onClick={decrementar}>-              </button>
      </div>

      <div>
        <button className="add-btn" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
