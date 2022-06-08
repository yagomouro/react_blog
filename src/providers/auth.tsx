import { createContext, ReactNode } from 'react';

interface AuthContext {}

interface AuthContextProvider {
  children?: ReactNode;
}

export const AuthContext = createContext({});

export const AuthContextProvider = () => {
  return;
};
