import React from 'react';
import propTypes from 'prop-types';

import { RoundedButton } from 'style/button';

const RefreshButtonComponent = ({ event }) => (
  <RoundedButton type="button" onClick={event}>
    Refresh
  </RoundedButton>
);

RefreshButtonComponent.propTypes = {
  event: propTypes.func.isRequired,
};

export default RefreshButtonComponent;
