import React from 'react';

import { Spinner, Wrapper } from './style';

const LoadingSpinner: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default LoadingSpinner;
