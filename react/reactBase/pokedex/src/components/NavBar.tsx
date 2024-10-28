import React from "react";

interface Pokemon {
    name: string;
    imgSrc?: string;
}
  
interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList }) => {

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button
                    key={pokemon.name}
                    onClick={() => {
                        setPokemonIndex(index);
                        if (pokemon.name === "pikachu") {
                            alert("pika pikachu !!!");
                        }
                    }}
                >
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
};
export default NavBar;
