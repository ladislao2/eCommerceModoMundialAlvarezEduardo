import Navbar from "./Components/NavBar/NavBar.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart+CartWidget/Cart";
import Provider from "./Context/cartContext";
import Form from "./Components/Form/Form";

function App() {
  let nombreUsuario = "Bienvenido A Modo Mundial, Listo para realizar su orden.";
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={nombreUsuario} />}
          />
          <Route
            path="/categorias/:categoria"
            element={<ItemListContainer greeting={nombreUsuario} />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
