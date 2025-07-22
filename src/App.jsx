import { useState } from "react";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import { testPokemons } from "./data/testPokemons";

function App() {
  const [search, setSearch] = useState("");

  const filteredPokemons = testPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Pokeball w tle */}
      <img
        src="pokeball-icon.png"
        alt=""
        className="absolute left-0 top-0 w-[172px] h-[173px] md:w-[400px] md:h-[400px] opacity-30 pointer-events-none select-none translate-x-[-50%] md:translate-x-[400px]"
        style={{ zIndex: 0 }}
      />
      <img
        src="pokeball-icon.png"
        alt=""
        className="absolute left-0 top-0 w-[172px] h-[173px] md:w-[400px] md:h-[400px] opacity-30 pointer-events-none select-none translate-y-[-55%] translate-x-[250px] md:translate-x-[1300px]"
        style={{ zIndex: 0 }}
      />
      <img
        src="pokeball-icon.png"
        alt=""
        className="absolute left-0 top-0 w-[172px] h-[173px] opacity-30 pointer-events-none select-none translate-x-[350px] md:translate-x-[1800px] translate-y-[500px] md:w-[400px] md:h-[400px]"
        style={{ zIndex: 0 }}
      />
      <Header />
      <div className="w-full md:max-w-[50rem] mx-auto mt-3 p-4">
        <input
          type="text"
          placeholder="search pikachu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-[10px] bg-white shadow-[0_4px_18.5px_2px_rgba(0,0,0,0.25)] text-lg outline-none"
        />
      </div>
      <main
        className="w-full md:max-w-[100rem] mx-auto p-4 grid grid-cols-1 gap-4 md:grid-cols-3"
        style={{ zIndex: 1, position: "relative" }}
      >
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            id={pokemon.id}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
