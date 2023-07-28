import "./App.css";
import CatNav from "./components/CatNav";
import MAinComponent from "./components/MainComponent";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MAinComponent />
    </div>
  );
}

export default App;
