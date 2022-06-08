import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 6rem;
  width: 100%;
  margin-bottom: 2rem;

  border-bottom: 1px solid #c7c7c7;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
  padding: 0 5rem;

  img {
    width: 6rem;
    height: 6rem;

    cursor: pointer;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
`;
