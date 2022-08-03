import { useState } from "react";
import { useEffect } from "react";
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

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoria)
      );

      getDocs(queryFilter).then(res =>
        setData(res.docs.map(items => ({ id: items.id, ...items.data() })))
      );
    } else {
      getDocs(queryCollection).then(res =>
        setData(res.docs.map(items=> ({ id: items.id, ...items.data() })))
      );
    }
  }, [categoria]);

  return (
    <div>
      
     
        <div className="cards">
          <ItemList items={data} />
        </div>
  
    </div>
  );
};

export default ItemListContainer;
