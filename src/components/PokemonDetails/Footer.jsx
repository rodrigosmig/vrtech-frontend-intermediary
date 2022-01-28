import styled from "styled-components";
import { capitalizeFirstLetter } from "../../helpers/helpers";

const DataFooter = styled.div`
margin-top: 24px;
width: 100%;
color: var(--white);
display: flex;
align-items: center;
justify-content: space-around;
`;

const Weight = styled.div`
`;

const Type = styled.div`
`;

const Height = styled.div`
`;

const Text = styled.p`
  font-weight: 500;
  font-size: ${props => props.size};
  text-align: center;
`;

const Unit = styled.span`
  font-size: 14px;
`;

export function Footer({ height, type, weight }) {
  return (
    <DataFooter>
      <Weight>
        <Text size="18px">
          {weight.value}
          <Unit>
            {weight.unit}
          </Unit>
        </Text>
        <Text size="12px">Weight</Text>
      </Weight>

      <Type>
        <Text size="14px">{capitalizeFirstLetter(type)}</Text>
        <Text size="10px">Type</Text>
      </Type>

      <Height>
        <Text size="18px">
          {height.value}
          <Unit>
            {height.unit}
          </Unit>
        </Text>
        <Text size="12px">Height</Text>
      </Height>
    </DataFooter>
  )
}