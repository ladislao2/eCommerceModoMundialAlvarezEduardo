import { useState } from "react";
import { useEffect } from "react";
import productos from "../mock/productos";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true)
    const traerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    traerProductos
      .then((data) => {
        setItems(data);
        setCargando(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //corchetes vacios dice que cuando se monte el componente useEffect se ejecuta la primera vez y nada mas.

  // console.log(items);

  return (
    <div>
      <h2> {greeting} listo para comprar</h2>
      {cargando ? (
        <h3>Cargando productos sepa disculpar los estilos...</h3>
      ) : (
        <div className="cards">
          <ItemList items={items} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
