import styled from "styled-components"
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

const Container = styled.div`
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  background-color: var(--background);
`;

export function Home() {
  return (    
    <Container>
      <Header />
      
      <Search />

      <CardList />
    </Container>
  )
}