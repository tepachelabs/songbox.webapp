import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { OrangeButton } from 'style/button';

export const RefreshButtonComponent = ({ event }) => {
  const [t] = useTranslation();
  return (
    <OrangeButton type="button" onClick={event}>
      {t('home.refresh')}
    </OrangeButton>
  );
};

RefreshButtonComponent.propTypes = {
  event: propTypes.func.isRequired,
};
