import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, type }: ButtonProps) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

export default Button;
