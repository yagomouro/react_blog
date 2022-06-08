import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  gap: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  background: #f6f6f6;
  height: 30rem;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  input {
    height: 4rem;
    border: 1px solid #b6b6b6;
    border-radius: 3px;
    font-size: 1.4rem;
    padding: 0 1rem;
  }
`;
