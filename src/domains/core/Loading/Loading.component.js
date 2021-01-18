import React from 'react';
import propTypes from 'prop-types';

import './styles/loading.scss';

export const Loading = ({ isLoading }) => {
  const className = isLoading ? '' : 'hide-loading';
  return <div className={`is-loading ${className}`} />;
};

Loading.propTypes = {
  isLoading: propTypes.bool.isRequired,
};
