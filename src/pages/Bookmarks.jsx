import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { usePokemons } from "../hooks/usePokemons";

const Container = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  width: 82%;
  margin: 0 auto 27px;
  font-size: 25px;
  font-weight: bold;
  line-height: 29px;
  color: var(--purple);

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const Content = styled.div`
  width: 82%;
  margin: 42px auto 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }  
`;

export function Bookmarks() {
  const { isLoading, bookmarkedPokemons } = usePokemons();
  return (
    <Container>
      <Header />
        <H1>Meus Favoritos</H1>
      <Content>
        {isLoading ? (
          <Loading />
        ) : (
            bookmarkedPokemons.map(pokemon => (
            <Card 
              key={pokemon.id} 
              pokemon={pokemon}
            />
          ))
        )}
      </Content>
    </Container>
  )
}