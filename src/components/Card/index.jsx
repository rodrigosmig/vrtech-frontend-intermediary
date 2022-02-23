import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPokemonColor } from "../../helpers/helpers";
import { CardHeader } from "./CardHeader";

const Container = styled.div`
  width: 181px;
  height: 253px;
  background-color: ${props => props.color};
  border-radius: 25px;
  
  margin-right: 51px;
  margin-bottom: 15px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  width: 122px;
  height: 122px;
  margin-top: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 70px;
  padding: 10px 15px;
`;

export function Card({ pokemon }) {
  return (
    <Container color={getPokemonColor(pokemon.types[0])}>
      <Link to={`/details/${pokemon.name}`}>
        <CardHeader 
          title={pokemon.name} 
          subtitle={String(pokemon.id)} 
        />

        <Image src={ pokemon.image } alt={ pokemon.name } />
      </Link>
    </Container>
  )
}