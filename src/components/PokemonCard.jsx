import { Link } from "react-router-dom";

function PokemonCard({ name, image, types, id }) {
  const getTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return "bg-yellow-300 text-black";
      case "grass":
        return "bg-green-400 text-black";
      case "poison":
        return "bg-blue-400 text-white";
      case "fire":
        return "bg-red-400 text-white";
      case "water":
        return "bg-blue-400 text-white";
      case "bug":
        return "bg-lime-400 text-black";
      case "psychic":
        return "bg-pink-400 text-white";
      case "normal":
        return "bg-gray-300 text-black";
      case "ground":
        return "bg-yellow-700 text-white";
      case "fairy":
        return "bg-pink-200 text-black";
      default:
        return "bg-gray-200 text-black";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow flex flex-col md:flex-row items-center gap-6 border-2 border-blue-400 overflow-hidden w-full md:justify-center md:h-[350px]">
      <div className="flex-1 p-6 flex flex-col justify-between h-full w-full text-center">
        <div className="flex gap-2 mb-3">
          {types.map((type) => (
            <span
              key={type}
              className={`px-4 py-1 rounded-full text-sm font-semibold ${getTypeClass(
                type
              )}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-3xl font-bold capitalize">{name}</h2>
          <span className="text-lg font-bold text-gray-700">
            #{id.toString().padStart(3, "0")}
          </span>
        </div>
        <Link to={`/pokemon/${id}`}>
          <button className="bg-[#ececd6] rounded-lg px-5 py-2 font-semibold text-black shadow hover:scale-105 transition mt-auto">
            Know More
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-[300px] h-[300px] bg-white p-2 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default PokemonCard;
