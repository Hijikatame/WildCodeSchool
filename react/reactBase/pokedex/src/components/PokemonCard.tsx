function PokemonCard({ pokemon }) {
  return (
    <figure>
      <figcaption>{pokemon.name}</figcaption>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>}
    </figure>
  );
}

export default PokemonCard;
