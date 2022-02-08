import styled from "styled-components";

const Container = styled.div`
  width: 62%;
  height: 436px;
  margin-left: auto;
  background: var(--white);
  border-radius: 25px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 600px;
    margin-top: 45px;
  }
`;

const Ul = styled.ul`
  width: 481px;
  height: 259px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 95%;
    margin-top: 45px;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  margin-top: 29px;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;

const Skill = styled.div`
  width: 28%;
  text-transform: capitalize;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const Value = styled.div`
  width: 6%;
  margin-right: 2px;

  @media (max-width: 800px) {
    font-size: 15px;
    margin-right: 10px;
  }
`;

const Bar = styled.div`
  width: 62%;
  height: 7px;
  background-color: var(--gray);
`;

const Fill = styled.div`
  width: ${props => props.width};
  height: 7px;
  background-color: var(--blue);
`;

export function Stats({stats}) {
  const getPercentValue = (value) => {
    if (value > 100) {
      return 100 + "%";
    }

    return value + "%";
  }

  return (
    <Container>
      <Ul>
        { stats.map(stat => (
          <Li key={ stat.name }>
            <Skill>{stat.name}</Skill>
            <Value>{ stat.value }</Value>
            <Bar>
              <Fill width={getPercentValue(stat.value)}></Fill>
            </Bar>          
          </Li>

        )) }
      </Ul>
    </Container>
  )
}