import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { OrangeButton } from 'style/button';

export const RefreshButtonComponent = ({ onClick }) => {
  const [t] = useTranslation();

  return (
    <OrangeButton type="button" onClick={onClick}>
      {t('home.refresh')}
    </OrangeButton>
  );
};

RefreshButtonComponent.propTypes = {
  onClick: propTypes.func.isRequired,
};
