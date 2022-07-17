import React from "react";

const ItemDetail = ({ item }) => {
  const { Precio, Stock, Descripcion, img } = item;

  return (
    <>
      <div>{img}</div>
      <h1>{Precio}</h1>
      <div>{Stock}</div>
      <div>{Descripcion}</div>
    </>
  );
};

export default ItemDetail;
