import { useContext } from "react";
import { PokemonContext } from "../contexts/Pokemons";

export const usePokemons = () => {
  const {
    pokemons,
    filteredPokemons,
    isLoading,
    isError,
    searchPokemon
  } = useContext(PokemonContext);

  return {
    pokemons,
    filteredPokemons,
    isLoading,
    isError,
    searchPokemon
  }
}