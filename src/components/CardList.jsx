import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../services/api";
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
`;

export function CardList() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('pokemons');    
      setPokemons(response.data)
    }    

    fetchData()
  }, [])

  return (
    <Section>
      <Content>
        {pokemons?.map(pokemon => (
          <Card key={pokemon.id} />
        ))}
      </Content>
    </Section>
  )
}