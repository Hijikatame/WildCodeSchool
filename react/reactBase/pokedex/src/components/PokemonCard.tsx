interface PokemonProps {
  name: string;
  imgSrc?: string;
  styles: any;
}

function PokemonCard({ name, imgSrc, styles }: PokemonProps) {
  let cardClass = styles.card;
  if (name === "bulbasaur") {
    cardClass = `${styles.card} ${styles.bulbasaur}`;
  } else if (name === "charmander") {
    cardClass = `${styles.card} ${styles.charmander}`;
  } else if (name === "squirtle") {
    cardClass = `${styles.card} ${styles.squirtle}`;
  } else if (name === "pikachu") {
    cardClass = `${styles.card} ${styles.pikachu}`;
  } else if (name === "mew") {
    cardClass = `${styles.card} ${styles.mew}`;
  }

  return (
    <figure className={cardClass}>
      {imgSrc != null && <img src={imgSrc} className={styles.cardImg} />}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
