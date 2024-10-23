import "./App.css";

import PokemonCard from "./components/PokemonCard";

import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  const handleClickPrev = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  }
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length -1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  return (
    <section>
      <div>
        <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc} />
      </div>
      {pokemonIndex > 0 && (
        <button onClick={handleClickPrev} /*disabled={pokemonIndex === 0}*/ /*style={{ display: pokemonIndex === 0 ? 'none' : 'inline-block' }}*/>
          Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext} /*disabled={pokemonIndex === pokemonList.length - 1}*/ /*style={{ display: pokemonIndex === pokemonList.length - 1 ? 'none' : 'inline-block' }}*/>
          Suivant</button>
      )}
    </section>
  );
}

export default App;
