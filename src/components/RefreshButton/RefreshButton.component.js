import React from 'react';
import propTypes from 'prop-types';

import './styles/refreshbutton.scss';

const RefreshButtonComponent = ({ event }) => (
  <button className="refresh-btn" onClick={event} type="button">Refresh</button>
);

RefreshButtonComponent.propTypes = {
  event: propTypes.func.isRequired,
};

export default RefreshButtonComponent;
