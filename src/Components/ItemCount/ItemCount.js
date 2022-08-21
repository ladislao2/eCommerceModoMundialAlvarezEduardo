import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, inicial, onAdd, Precio }) => {
  const [count, setCount] = useState(inicial);
  

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
        <button className="botonIncrementar" onClick={incrementar}>
          +
        </button>
        <p>{count}</p>
        <button className="botonDecrementar" onClick={decrementar}>
          -
        </button>
      </div>
      <span>
        <b>Total: ${count * Precio}</b>
        
      </span>
      
      <div>
        <button className="add-btn" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
    
  );
  
};


export default ItemCount;
