import "./App.css";
import Navbar from "./Components/NavBar.js";
import ItemListContainer from "./Components/ItemListContainer.js";


function App() {
  let nombreUsuario = 'Edu'
  return (
    <>
      <Navbar/>
    <ItemListContainer greeting={nombreUsuario}/>

  </>
  );
}

export default App;
