import React, { ReactNode, useEffect, useState } from 'react';

import { isAuthenticated } from '../../hooks/useAuth';
import Login from '../Login/Login';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState({
    isAuthenticated: false,
  });

  useEffect(() => {
    setState({ isAuthenticated: isAuthenticated() });
  }, []);

  const setIsAuthenticated = (val: boolean) => {
    setState({ isAuthenticated: val });
  };

  return (
    <AuthContext.Provider value={{ ...state, setIsAuthenticated }}>
      {state.isAuthenticated ? children : <Login />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
