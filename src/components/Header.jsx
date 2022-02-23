import styled from "styled-components";
import logo from "../assets/images/logo.png";
import heart from "../assets/images/heart.png"
import { Link } from "react-router-dom";

const Container = styled.div``;

const Bookmarks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 14px;
    height: 14px;
    margin-bottom: 2px;
    margin-right: 3px;
  }
`;

const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 189px;
    height: 69px;
    padding-top: 27px;
    padding-bottom: 21px;
  }
`;

const P = styled.p`
  margin-right: 10%;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  line-height: 17.58px;
  color: var(--purple);
  text-decoration: underline;
`;

export function Header() {
  return (
    <Container>
      <Link to="/bookmarks">
        <Bookmarks>
          <img src={heart} alt="Imagem de coração" />
          <P>Meus Favoritos</P>
        </Bookmarks>
      </Link>
      <HeaderComponent>
        <img src={logo} alt="Logo" />
      </HeaderComponent>

    </Container>

  )
}