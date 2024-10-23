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

const NavBar: React.FC<NavBarProps> = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
    const handleClickPrev = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    };

    const handleClickNext = () => {
        if (pokemonIndex < pokemonList.length - 1) {
          setPokemonIndex(pokemonIndex + 1);
        }
    };

    return (
        <nav>
            {pokemonIndex > 0 && (
                <button onClick={handleClickPrev} /*disabled={pokemonIndex === 0}*/ /*style={{ display: pokemonIndex === 0 ? 'none' : 'inline-block' }}*/>
                Précédent
                </button>
            )}
            {pokemonIndex < pokemonList.length - 1 && (
                <button onClick={handleClickNext} /*disabled={pokemonIndex === pokemonList.length - 1}*/ /*style={{ display: pokemonIndex === pokemonList.length - 1 ? 'none' : 'inline-block' }}*/>
                Suivant
                </button>
            )}
        </nav>
    );
};
export default NavBar;
