import { useState } from "react";
import { useEffect } from "react";
import productos from "../mock/productos";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const traerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 50);
    });
    traerProductos
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []); //corchetes vacios dice que cuando se monte el componente useEffect se ejecuta la primera vez y nada mas.

 // console.log(items);

  return (
    <>
      <h2> {greeting} listo para comprar</h2>
      <div className="cards">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
