import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await api.post('pokemons');

        setPokemons(response.data)
        setFilteredPokemons(response.data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }    

    fetchData()
  }, []);

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

  const providerValues = {
    pokemons,
    filteredPokemons,
    isLoading,
    isError,
    searchPokemon
  }

  return (
    <PokemonContext.Provider value={providerValues}>
      { children }
    </PokemonContext.Provider>
  )
}