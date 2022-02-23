import styled from "styled-components";
import { BookmarkedHeart } from "./BookmarkedHeart";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Bookmarks = styled.div`
  padding: 15px;
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 47px;
`;

const ContentBookmark = styled.div`
  padding-top: 8px;
`;

const Title = styled.h2`
  margin-top: 22px;
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
  text-transform: capitalize;
`;

const Subtitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: var(--black);
  margin-top: 3px;
`;

export function CardHeader({ title, subtitle }) {
  return (
    <Container>
      <ContentTitle>
        <Title>
          { title }
        </Title>
        <Subtitle>#{ subtitle.padStart(3, '0')}</Subtitle>
      </ContentTitle>

      <Bookmarks>
        <ContentBookmark>
            <BookmarkedHeart isActive={false} />
        </ContentBookmark>
      </Bookmarks>
    </Container>
  )
}