import React from "react";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>{item.Descripcion}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
