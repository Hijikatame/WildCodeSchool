interface PokemonProps {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: PokemonProps) {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      {imgSrc != null && <img src={imgSrc} />}
    </figure>
  );
}

export default PokemonCard;
