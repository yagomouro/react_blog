import styled from 'styled-components';

interface InputFileProps {
  imageSelected: string;
}

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  gap: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  background: #f6f6f6;

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  input[type='text'] {
    height: 4rem;
    border: 1px solid #b6b6b6;
    border-radius: 3px;
    font-size: 1.4rem;
    padding: 0 1rem;
  }

  textarea {
    min-height: 18rem;
    font-size: 1.4rem;
    padding: 1rem;
    max-height: 25rem;
    resize: vertical;
    border: 1px solid #b6b6b6;
    border-radius: 3px;
  }
`;
// prettier-ignore
export const InputFile = styled.input`
  background-image: url(${({ imageSelected }: InputFileProps) => imageSelected});
  height: 15rem;
  cursor: pointer;
  padding: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  color: black;
  font-size: 2rem;
  -webkit-text-stroke: 0.2px black;
  border-radius: 3px;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }
`;
