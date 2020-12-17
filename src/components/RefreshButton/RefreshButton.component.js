import React from 'react';

import './styles/refreshbutton.scss';
import propTypes from 'prop-types';

const RefreshButtonComponent = ({ event }) => (
  <button type="button" className="refresh-btn" onClick={event}>Refresh</button>
);

RefreshButtonComponent.propTypes = {
  event: propTypes.func.isRequired,
};

export default RefreshButtonComponent;
