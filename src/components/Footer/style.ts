import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 10rem;

  margin-top: 8rem;

  border-top: 1px solid #c7c7c7;
  width: 100%;
`;

export const FooterContent = styled.div`
  margin: auto;
  max-width: 120rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
    height: 10rem;
  }

  h1 {
    font-size: 1.2rem;
  }
`;
