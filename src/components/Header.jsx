import styled from "styled-components"

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
`

export function Header() {
  return (
      <HeaderComponent>
        <img src="/images/logo.svg" alt="Logo" />
      </HeaderComponent>

  )
}