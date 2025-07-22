import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();

        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        const mapped = detailedData.map((p) => ({
          id: p.id,
          name: p.name,
          image: p.sprites.front_default,
          types: p.types.map((t) => t.type.name),
        }));

        setPokemons(mapped);
        setLoading(false);
      } catch (error) {
        console.error("API Error:", error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full md:max-w-[100rem] mx-auto mt-3 p-4">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-[10px] bg-white shadow-[0_4px_18.5px_2px_rgba(0,0,0,0.25)] text-lg outline-none text-black placeholder-gray-500"
      />

      <main className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {loading ? (
          <p className="text-white text-xl text-center">Loading...</p>
        ) : (
          filteredPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default Home;
