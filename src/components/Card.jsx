import styled from "styled-components";


const Container = styled.div`
  width: 181px;
  height: 253px;
  background-color: var(--green);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 51px;
  margin-bottom: 15px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const Title = styled.h2`
  margin-top: 22px;
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
  font-weight: 400;
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


export function Card() {
  return (
    <Container>
      <Title>Bulbasaur</Title>
      <Subtitle>#0001</Subtitle>
      <Image src="images/bulbasaur.png" alt="Bulbasaur" />
    </Container>
  )
}