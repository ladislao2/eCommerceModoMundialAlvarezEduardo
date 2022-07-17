import { useState } from "react";
import { useEffect } from "react";
import productos from "../mock/productos";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const traerItemPorId = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((obj) => obj.id === "4"));
      }, 3000);
    });
  };

  useEffect(() => {
    traerItemPorId().then((respuesta) => {
      setItem(respuesta);
    });
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
