import { useState } from "react";
import styled from "styled-components"
import { usePokemons } from "../hooks/usePokemons";

const Form = styled.form`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Input = styled.input`
  width: 751px;
  height: 45px;
  padding-left: 22px;
  border-radius: 10px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 109px;
  height: 46px;
  margin-left: 10px;
  background: var(--dark-blue);
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--yellow);
  cursor: pointer;

  @media (max-width: 800px) {
    width: 60%;
    font-size: 14px;
  }
`;

export function Search() {
  const { isLoading, searchPokemon } = usePokemons();
  const [pokemonName, setPokemonName] = useState("");

  return (
    <Form onSubmit={event => searchPokemon(event, pokemonName)}>
      <Input 
        value={pokemonName}
        type="text" 
        placeholder="Digite o nome do Pokémon" 
        onChange={e => setPokemonName(e.target.value)}
      />
      <Button 
        type="submit"
        disabled={isLoading}
      >
        Buscar
      </Button>
    </Form>
  )
}