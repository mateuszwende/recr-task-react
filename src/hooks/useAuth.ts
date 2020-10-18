import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AuthContext from '../components/Auth/AuthContext';

export const STORAGE_KEY = "__SW_USER";

export const useAuth = () => {
  const state = useContext(AuthContext);

  const login = (email?: string) => {
    // ...
    // login
    // get token from backend
    // ...
    const newToken = uuidv4();
    saveToken(newToken);
    state.setIsAuthenticated(true);
  };

  const logout = () => {
    // Simplified...
    removeToken();
    state.setIsAuthenticated(false);
  };

  return { ...state, login, logout };
};

export function isAuthenticated() {
  // Simplified...
  return localStorage.getItem(STORAGE_KEY) ? true : false;
}

export function saveToken(token: string) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(token));
}

export function removeToken() {
  localStorage.removeItem(STORAGE_KEY);
}
