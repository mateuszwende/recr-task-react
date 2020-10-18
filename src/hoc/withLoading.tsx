import React from 'react';

import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

interface Props {
  isLoading?: boolean;
}

const withLoading = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & Props> => ({ isLoading, ...props }) =>
  isLoading ? <LoadingSpinner /> : <Component {...(props as P)} />;

export default withLoading;
