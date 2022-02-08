import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PokemonDetails } from "../components/PokemonDetails";
import { getPokemonColor } from "../helpers/helpers";
import { api } from "../services/api";

const Container = styled.div`
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;  
`;

const Section = styled.section`
  max-width: 877px;
  height: 436px;
  margin: 63px auto 0;
  background-color: ${props => props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  display: flex;

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column;
  }
`;

export function Details() {

  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await api.post(`/pokemons/${name}`);        
        setPokemon(response.data)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error.response.data.message)
        return (<p>Nenhum Pokemon encontrado</p>)
      }
    }    

    fetchData()
  }, []);

  const hasPokemon = () => {
    return pokemon !== undefined
  }

  return (    
    <Container>
      <Header />
      { (isLoading || !hasPokemon()) ? (
        <Loading />
      ) : (
        <Section color={getPokemonColor(pokemon.types[0])}>
          <PokemonDetails pokemon={pokemon} />          
        </Section>
      )}
    </Container>
  )
}