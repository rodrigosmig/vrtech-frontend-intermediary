import styled from "styled-components";
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { usePokemons } from "../hooks/usePokemons";

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
  const { isError } = usePokemons();

  return (    
    <Container>
      <Header />      
      <Search />

      { isError && <Error>Nenhum Pokemon Encontrado</Error> }

      <CardList />
    </Container>
  )
}