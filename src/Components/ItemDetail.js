import Card from "react-bootstrap/Card";

import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../cartContext";

const ItemDetail = ({ item }) => {
  const { name, img, Descripcion, Precio, Stock } = item;

  const [cantidad, setCantidad] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <h3>${Precio}</h3>
        <p>{Descripcion}</p>
        {cantidad === 0 ? (
          <ItemCount stock={Stock} Precio={Precio} inicial={0} onAdd={onAdd} />
        ) : (
          <Link to="/cart"> Ir a mi carrito</Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
