import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../mock/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const traerItemPorId = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(obj => obj.id === id));
      }, 1000)
    });
  };

  useEffect(() => {
    traerItemPorId().then((respuesta) => {
      setItem(respuesta);
    });
  }, [id]);

  return (
    
      <ItemDetail  item={item} />
    
  );
};

export default ItemDetailContainer
