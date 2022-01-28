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
  background-color: var(--background);
`;

const Error = styled.h4`
  margin-top: 25px;
  font-weight: 500;
  text-align: center;
`;

export function Home() {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await api.post('pokemons');        
        setPokemons(response.data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }    

    fetchData()
  }, []);

  const handleSearch = (name) => {
    if (isError) {
      setIsError(false);
    }

    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.includes(name);
    })

    if (filteredPokemons.length === 0) {
      setIsError(true);
      return;
    }

    setPokemons(filteredPokemons);
  }

  return (    
    <Container>
      <Header />      
      <Search onClick={handleSearch} />

      { isError && <Error>Nenhum Pokemon Encontrado</Error> }

      <CardList 
        pokemons={pokemons} 
        isLoading={isLoading}
      />
    </Container>
  )
}