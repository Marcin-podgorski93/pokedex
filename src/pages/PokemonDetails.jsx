import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PokemonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();

        const mapped = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
          types: data.types.map((t) => t.type.name),
          stats: data.stats.reduce((acc, stat) => {
            acc[stat.stat.name.replace("-", "_")] = stat.base_stat;
            return acc;
          }, {}),
        };

        setPokemon(mapped);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  const getBackgroundColor = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return "bg-yellow-300";
      case "grass":
        return "bg-green-400";
      case "poison":
        return "bg-blue-400";
      case "fire":
        return "bg-red-400";
      case "water":
        return "bg-blue-400";
      case "bug":
        return "bg-lime-400";
      case "psychic":
        return "bg-pink-400";
      case "normal":
        return "bg-gray-300";
      case "fairy":
        return "bg-pink-200";
      default:
        return "bg-gray-200";
    }
  };

  if (loading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error || !pokemon)
    return (
      <div className="text-white text-center p-10">
        <p className="text-2xl">Pokemon not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-white text-black rounded shadow"
        >
          Go Back
        </button>
      </div>
    );

  const { name, image, types, stats, height, weight, base_experience } =
    pokemon;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className="bg-white rounded-3xl p-6 md:p-10 max-w-5xl w-full flex flex-col md:flex-row gap-10 shadow-lg z-10">
        {/* Obrazek i typ */}
        <div
          className={`flex-1 flex items-center justify-center rounded-2xl p-6 ${getBackgroundColor(
            types[0]
          )}`}
        >
          <img
            src={image}
            alt={name}
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg"
          />
        </div>

        {/* Dane Pokemona */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-4xl font-bold capitalize mb-4">{name}</h2>
          <p>
            <strong>ID:</strong> #{id}
          </p>
          <p>
            <strong>Height:</strong> {height / 10} m
          </p>
          <p>
            <strong>Weight:</strong> {weight / 10} kg
          </p>
          <p>
            <strong>Base XP:</strong> {base_experience}
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Stats</h3>
            <ul className="grid grid-cols-2 gap-2">
              {Object.entries(stats).map(([stat, value]) => (
                <li
                  key={stat}
                  className="flex justify-between bg-gray-100 px-4 py-2 rounded shadow"
                >
                  <span className="capitalize">
                    {stat.replaceAll("_", " ")}
                  </span>
                  <span className="font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate("/")}
              className="bg-[#ececd6] px-5 py-2 rounded-lg font-semibold text-black hover:scale-105 transition"
            >
              Back to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
