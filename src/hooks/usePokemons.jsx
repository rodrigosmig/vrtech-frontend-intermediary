import { useContext } from "react";
import { PokemonContext } from "../contexts/Pokemons";

export const usePokemons = () => {
  const {
    pokemons,
    filteredPokemons,
    bookmarkedPokemons,
    isLoading,
    isError,
    searchPokemon,
    toggle
  } = useContext(PokemonContext);

  return {
    pokemons,
    filteredPokemons,
    bookmarkedPokemons,
    isLoading,
    isError,
    searchPokemon,
    toggle
  }
}