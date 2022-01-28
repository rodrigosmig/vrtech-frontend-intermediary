import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Stats } from "./Stats";

const PokemonData = styled.div`
  width: 38%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 236px;
  height: 236px;
  margin-top: 21px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 150px;
  padding: 10px 15px;
`;

export function PokemonDetails({ pokemon }) {
  return (
    <>
    <PokemonData>
      <Header id={pokemon.id} name={pokemon.name} />
      
      <Image src={ pokemon.image } alt={ pokemon.name } />      
      
      <Footer
        height={pokemon.height}
        type={pokemon.types[0]}
        weight={pokemon.weight}
      />
    </PokemonData>

    <Stats stats={pokemon.stats} />
    </>
  )
}