import React from 'react';
import propTypes from 'prop-types';

import { RefreshButton } from './refresh-button.style';

const RefreshButtonComponent = ({ event }) => (
  <RefreshButton type="button" className="refresh-btn" onClick={event}>
    Refresh
  </RefreshButton>
);

RefreshButtonComponent.propTypes = {
  event: propTypes.func.isRequired,
};

export default RefreshButtonComponent;
