import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { api } from "../services/api";

const Container = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
`;

const Error = styled.h4`
  margin-top: 25px;
  font-weight: 500;
  text-align: center;
`;

export function Home() {
  const [pokemons, setPokemons] = useState();
  const [filteredPokemons, setFilteredPokemons] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await api.post('pokemons');
        const new_pokemons = setBookmarkedPokemons(response.data);
        console.log(new_pokemons);

        setPokemons(new_pokemons)
        setFilteredPokemons(new_pokemons)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }    

    fetchData()
  }, []);

  const setBookmarkedPokemons = (new_pokemons) => {
    return new_pokemons.map(pokemon => {
      return {
        ...pokemon,
        is_bookmarked: [1, 3, 6, 10].includes(pokemon.id) ? true : false
      }
    })
  }

  const handleSearch = (event, name) => {
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

  return (    
    <Container>
      <Header />      
      <Search 
        onSearch={handleSearch}
        isDisabled={isLoading}
      />

      { isError && <Error>Nenhum Pokemon Encontrado</Error> }

      <CardList 
        pokemons={filteredPokemons} 
        isLoading={isLoading}
      />
    </Container>
  )
}