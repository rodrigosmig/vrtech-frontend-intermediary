import { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [pokemonsBookmarked, setPokemonsBookmarked] = useState([]);

  const addPokemon = (pokemon) => {
    console.log(pokemon)
    setPokemonsBookmarked(old_pokemons => [...old_pokemons, pokemon])
  }

  return (
    <BookmarkContext.Provider value={{ pokemonsBookmarked, addPokemon }}>
      { children }
    </BookmarkContext.Provider>
  )
}

export const useBookmarkedPokemons = () => {
  const {
    pokemonsBookmarked,
    addPokemon
  } = useContext(BookmarkContext);

  return {
    pokemonsBookmarked,
    addPokemon
  }
}