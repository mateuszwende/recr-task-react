import React from 'react';

import { useAuth } from '../../hooks/useAuth';
import { Form, Wrapper } from './style';

const Login: React.FC = () => {
  const { login } = useAuth();
  const input = React.createRef<HTMLInputElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(input.current?.value);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <input type="text" ref={input} placeholder="Login" />
      </Form>
    </Wrapper>
  );
};

export default Login;
