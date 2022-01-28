import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
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

export function Search({ onClick }) {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Input 
        value={value}
        type="text" 
        placeholder="Digite o nome do Pokémon" 
        onChange={e => setValue(e.target.value)}
      />
      <Button onClick={e => onClick(value)}>Buscar</Button>
    </Container>
  )
}