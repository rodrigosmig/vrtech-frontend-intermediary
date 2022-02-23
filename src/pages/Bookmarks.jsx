import styled from "styled-components";
import { Header } from "../components/Header";

const Container = styled.div`
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  width: 90%;
  margin: 0 auto;
  font-size: 25px;
  font-weight: bold;
  line-height: 29px;
  color: var(--purple);
`;

export function Bookmarks() {
  return (
    <Container>
      <Header />      

      <H1>Meus Favoritos</H1>
    </Container>
  )
}