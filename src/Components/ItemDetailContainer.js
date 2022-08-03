import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import productos from "../mock/productos";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    getDoc(queryDoc).then(res => setData({ id: res.id, ...res.data() }));
  }, [id]);

  return <ItemDetail item={data} />;
};

export default ItemDetailContainer;
