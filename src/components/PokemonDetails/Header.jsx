import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 22px;
`;

const ContentArrow = styled.div`
  padding: 20px;
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 52px;
`;

const ArrowBack = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: var(--white);
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: var(--white);
  line-height: 28px;
  text-transform: capitalize;
`;

const Subtitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: var(--black);
  margin-top: 4.69px;
`;

export function Header({ id, name }) {
  return (
    <Container>
      <ContentArrow>
        <ArrowBack>
          <Link to={'/home'}>
            {"<"}
          </Link>
        </ArrowBack>
      </ContentArrow>

      <ContentTitle>
        <Title>
          { name }
        </Title>
        <Subtitle>#{ String(id).padStart(3, '0') }</Subtitle>
      </ContentTitle>
    </Container>
  )
}