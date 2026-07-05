import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

function PokemonList() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarPokemon() {
      const respuesta = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );

      const lista = await respuesta.json();

      const datos = await Promise.all(
        lista.results.map(async (item: { url: string }) => {
          const res = await fetch(item.url);
          return await res.json();
        })
      );

      setPokemon(datos);
      setLoading(false);
    }

    cargarPokemon();
  }, []);

  if (loading) {
    return <h2 className="loading">Cargando Pokémon...</h2>;
  }

  return (
    <section className="pokemon-container">
      <h1 className="pokemon-title">Pokédex</h1>

      <p className="pokemon-subtitle">
        Los primeros 10 Pokémon de la PokeAPI
      </p>

      <div className="pokemon-grid">
        {pokemon.map((poke) => (
          <PokemonCard
            key={poke.id}
            id={poke.id}
            name={poke.name}
            image={poke.sprites.front_default}
          />
        ))}
      </div>
    </section>
  );
}

export default PokemonList;