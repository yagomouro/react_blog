import styled from 'styled-components';

export const ImgWrapper = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.6rem;
  background: #cdbdf922;

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: #d356e4;
  }
  h1 {
    font-size: 2.2rem;
    transition: 0.2s;

    &:hover {
      color: #d356e4;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  &.isOtherPost {
    width: calc((100% - 2rem) / 2);
  }

  &.isFeatured {
    flex-direction: column;

    ${ImgWrapper} {
      width: 100%;
      height: 30rem;
      margin-bottom: 1rem;
      border-radius: 10px;
      overflow: hidden;
    }

    ${InfoWrapper} {
      padding: 0 0.5rem;
      background: transparent;

      p {
        font-size: 1.4rem;
      }

      h1 {
        font-size: 2.6rem;
      }
    }
  }

  &.isPostPage {
    ${ImgWrapper} {
      width: 12rem;
      height: 8rem;
    }

    ${InfoWrapper} {
      p {
        font-size: 1.2rem;
      }

      h1 {
        font-size: 1.6rem;
      }
    }
  }
`;
