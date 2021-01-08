import React from 'react';
import propTypes from 'prop-types';

import './styles/loading.scss';

const LoadingComponent = ({ isLoading }) => {
  const className = isLoading ? 'is-loading' : 'hide-loading';
  return (
    <div className={className} />
  );
};

LoadingComponent.propTypes = {
  isLoading: propTypes.bool.isRequired,
};

export default LoadingComponent;
