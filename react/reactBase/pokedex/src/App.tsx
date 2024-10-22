import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: undefined,
  },
];

function App() {
  return (
    <section>
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
      <PokemonCard name={pokemonList[1].name} />
    </section>
  );
}

export default App;
