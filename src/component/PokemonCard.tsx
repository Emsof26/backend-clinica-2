type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
};

function PokemonCard({ id, name, image }: PokemonCardProps) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={image} alt={name} />
      </div>

      <span className="pokemon-id">
        #{id.toString().padStart(3, "0")}
      </span>

      <h2 className="pokemon-name">{name}</h2>
    </div>
  );
}

export default PokemonCard;