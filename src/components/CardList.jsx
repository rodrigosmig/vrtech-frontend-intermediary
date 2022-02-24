import styled from "styled-components";
import { usePokemons } from "../hooks/usePokemons";
import { Card } from "./Card";
import { Loading } from "./Loading";


const Section = styled.section`
  width: 100%;
`;

const Content = styled.div`
  width: 82%;
  margin-top: 42px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 42px auto 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }  
`;

export function CardList() {
  const { isLoading, filteredPokemons } = usePokemons();

  return (
    <Section>
      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          filteredPokemons.map(pokemon => (
            <Card 
              key={pokemon.id} 
              pokemon={pokemon}
            />
          ))
        )}
      </Content>
    </Section>
  )
}