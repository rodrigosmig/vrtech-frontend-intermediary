import { Link } from "react-router-dom";
import styled from "styled-components";
import { capitalizeFirstLetter, getPokemonColor } from "../helpers/helpers";


const Container = styled.div`
  width: 181px;
  height: 253px;
  background-color: ${props => props.color};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 51px;
  margin-bottom: 15px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  margin-top: 22px;
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
`;

const Subtitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: var(--black);
  margin-top: 3px;
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
      <Title>
        <Link to={`/details/${pokemon.name}`}>
          { capitalizeFirstLetter(pokemon.name) }
        </Link>
      </Title>
      <Subtitle>#{ pokemon.id }</Subtitle>
      <Image src={ pokemon.image } alt={ pokemon.name } />
    </Container>
  )
}