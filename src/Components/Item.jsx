import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const onAdd = () => {
  console.log("click");
};
const Item = ({ item }) => {
  return (
    <Card  style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>

        <Button variant="primary">Detalles</Button>
        <ItemCount stock={10} inicial={1} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default Item;
