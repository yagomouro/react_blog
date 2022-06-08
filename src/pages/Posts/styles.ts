import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 120rem;
  margin: auto;
`;

export const PostInfoContainer = styled.div`
  width: 100%;
  margin-bottom: 6.4rem;

  h1 {
    font-size: 4rem;
    font-weight: 700;
  }

  span {
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

export const ImageWrapper = styled.div`
  height: 35rem;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1.6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6.4rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex: 7;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 2rem;
    margin-top: 2rem;
  }

  iframe {
    margin-top: 2rem;
  }

  p {
    font-size: 1.8rem;
    word-break: break-word;
    text-align: justify;
  }
  .infografico {
    margin-top: 3rem;
  }
  .referencia {
    margin-top: 5rem;
  }
`;

export const LastPostsWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .lastPostTitle {
    font-size: 2rem;
    font-weight: 600;
  }
`;
