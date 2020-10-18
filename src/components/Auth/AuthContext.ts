import { createContext } from 'react';

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => null,
});

export default AuthContext;
