import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  height: max-content;
  margin: auto;
  max-width: 120rem;
`;

export const FeaturedPostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.4rem;
  height: max-content;
  margin-bottom: 6.4rem;
`;

export const FirstFeaturedPost = styled.div`
  flex: 6;
`;

export const OtherFeaturedPostsWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  gap: 3.2rem;
`;

export const LastPostsWrapper = styled.div`
  .lastPostTitle {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }
`;

export const LastPosts = styled.div`
  height: max-content;
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`;
