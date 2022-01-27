import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
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
`;

export function Search() {
  return (
    <Container>
      <Input type="text" placeholder="Digite o nome do Pokémon" />
      <Button>Buscar</Button>
    </Container>
  )
}