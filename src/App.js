import "./App.css";
import Navbar from "./Components/NavBar.js";
import ItemListContainer from "./Components/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting='Bienvenido'/> }/>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
