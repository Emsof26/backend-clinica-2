import "./index.css";

import Navbar from "./component/Navbar";
import PokemonList from "./component/PokemonList";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <PokemonList />
      </main>
    </>
  );
}

export default App;