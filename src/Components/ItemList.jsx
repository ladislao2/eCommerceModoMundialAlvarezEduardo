import React from "react";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </>
  );
};

export default ItemList;
