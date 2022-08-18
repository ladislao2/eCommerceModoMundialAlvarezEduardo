import "./App.css";
import Navbar from "./Components/NavBar.js";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Provider from "./cartContext";

function App() {
  return (
    <>
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Modo Mundial le da la bienvenida." />}
          />
          <Route
            path="/categorias/:categoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
