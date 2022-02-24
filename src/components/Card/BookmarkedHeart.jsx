import active_heart from '../../assets/images/filled_heart.png';
import inactive_heart from '../../assets/images/empty_heart.png'
import styled from 'styled-components';

const Img = styled.img`
  cursor: pointer;
`;

export function BookmarkedHeart({ isActive, onClick }) {
  return (
    <>
      { isActive 
        ? (
          <Img src={active_heart} onClick={onClick} />
      ) : (
        <Img src={inactive_heart} onClick={onClick} />
      ) }
    
    </>
  )
}