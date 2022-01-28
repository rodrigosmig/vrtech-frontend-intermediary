import { Link } from "react-router-dom";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../helpers/helpers";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Content1 = styled.div`
  width: 26%;
  margin-left: 34px;
  padding-top: 20px;
`;

const Content2 = styled.div`
  text-align: center;
`;

const ArrowBack = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: var(--white);
`;

const Title = styled.h2`
  margin-top: 22px;
  font-weight: 500;
  font-size: 24px;
  color: var(--white);
  line-height: 28px;
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
      <Content1>
        <ArrowBack>
          <Link to={'/home'}>
            {"<"}
          </Link>
        </ArrowBack>
      </Content1>

      <Content2>
        <Title>
          { capitalizeFirstLetter(name) }
        </Title>
        <Subtitle>#{ id }</Subtitle>
      </Content2>
    </Container>
  )
}