import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { HeaderWrapper } from './style';

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <HeaderWrapper>
      Star Wars characters
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
