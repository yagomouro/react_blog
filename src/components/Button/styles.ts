import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 4rem;
  background: #826eed;
  color: #f6f6f6;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
