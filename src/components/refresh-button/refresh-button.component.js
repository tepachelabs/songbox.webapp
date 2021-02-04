import React from 'react';
import propTypes from 'prop-types';

import { OrangeButton } from 'style/button';

const RefreshButtonComponent = ({ event }) => (
  <OrangeButton type="button" onClick={event}>
    Refresh
  </OrangeButton>
);

RefreshButtonComponent.propTypes = {
  event: propTypes.func.isRequired,
};

export default RefreshButtonComponent;
