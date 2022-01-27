import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Container = styled.div`
  width: 10%;
  margin: 30px auto 0;
`;

export function Loading() {
  return (
    <Container>
      <ReactLoading type="spin" />
    </Container>
  )
}