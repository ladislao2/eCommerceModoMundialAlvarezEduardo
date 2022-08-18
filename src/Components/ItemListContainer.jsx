import { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
//import productos from "../mock/productos";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoria)
      );

      getDocs(queryFilter).then((res) =>
        setData(res.docs.map((items) => ({ id: items.id, ...items.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(res.docs.map((items) => ({ id: items.id, ...items.data() })))
        
       

      );
     
    }
     setData(data);
     setCargando(false);
  }, [categoria]);

  return (
    <>
      <h1>{greeting}</h1>
      {cargando ? (
        <Loader />
      ) : (
        <div className="cards">
          <ItemList items={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
