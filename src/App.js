import "./App.css";
import ItemContainerList from "./components/itemListContainer/indexItem";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemContainerList saludo={"Bienvenid@s a tu lugar de compra"} />
    </div>
  );
}

export default App;
