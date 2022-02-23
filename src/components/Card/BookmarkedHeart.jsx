import active_heart from '../../assets/images/filled_heart.png';
import inactive_heart from '../../assets/images/empty_heart.png'
import styled from 'styled-components';

const Img = styled.img`
  
`;

export function BookmarkedHeart({ isActive }) {
  return (
    <>
      { isActive 
        ? (
          <Img src={active_heart} />
      ) : (
        <Img src={inactive_heart} />
      ) }
    
    </>
  )
}