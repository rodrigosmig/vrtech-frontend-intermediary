import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [bookmarkedPokemons, setBookmarkedPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const updatedPokemons = pokemons.map(pokemon => {
      return {
        ...pokemon,
        is_bookmarked: isBookmarked(pokemon)
      }
    })

    setPokemons(updatedPokemons);
    setFilteredPokemons(updatedPokemons);

  }, [bookmarkedPokemons])

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await api.post('pokemons');
        const new_pokemons = response.data;
        setPokemons(new_pokemons);
        setFilteredPokemons(new_pokemons);
        setIsLoading(false);

        const bookmarkedPokemons = JSON.parse(localStorage.getItem('pokedex') || "[]");
        setBookmarkedPokemons(bookmarkedPokemons);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }    

    fetchData();
  }, []);

  const isBookmarked = (pokemon) => {
    return bookmarkedPokemons.filter(old_pokemon => old_pokemon.id === pokemon.id).length > 0;
  }

  const searchPokemon = (event, name) => {
    event.preventDefault();

    if (isError) {
      setIsError(false);
    }
    
    if (!name) {
      return setFilteredPokemons(pokemons)
    }

    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.includes(name);
    })

    if (filteredPokemons.length === 0) {
      setIsError(true);
      return;
    }

    setFilteredPokemons(filteredPokemons);
  }

  const setIsBookmarked = (new_pokemon) => {
    const new_pokemons = pokemons.map(old_pokemon => {
      return {
        ...old_pokemon,
        is_bookmarked: new_pokemon.id === old_pokemon.id ? new_pokemon.is_bookmarked : old_pokemon.is_bookmarked
      }
    })

    setPokemons(new_pokemons)
    setFilteredPokemons(new_pokemons)
  }

  const toggle = (pokemon) => {
    pokemon.is_bookmarked = !pokemon.is_bookmarked;
    
    setIsBookmarked(pokemon);
    toggleBookmarkedPokemon(pokemon);
  }

  const toggleBookmarkedPokemon = (pokemon) => {
    if (pokemon.is_bookmarked) {
      localStorage.setItem('pokedex', JSON.stringify([...bookmarkedPokemons, pokemon]));
      return setBookmarkedPokemons([...bookmarkedPokemons, pokemon]);
    }

    const newbookmarkedPokemons = bookmarkedPokemons.filter(old_pokemon => old_pokemon.id != pokemon.id);
    localStorage.setItem('pokedex', JSON.stringify(newbookmarkedPokemons));
    setBookmarkedPokemons(newbookmarkedPokemons);
  }

  const providerValues = {
    pokemons,
    filteredPokemons,
    bookmarkedPokemons,
    isLoading,
    isError,
    searchPokemon,
    toggle
  }

  return (
    <PokemonContext.Provider value={providerValues}>
      { children }
    </PokemonContext.Provider>
  )
}