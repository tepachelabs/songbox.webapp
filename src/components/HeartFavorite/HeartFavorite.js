import React from 'react';
import propTypes from 'prop-types';

import { gray } from 'style/colors';
import { TransparentButton } from 'style/button';
import { HeartIcon } from 'components/icon';

const HeartFavorite = ({ isFavorite, onClick }) => {
  const fillHeartStatus = isFavorite ? gray : 'none';

  return (
    <TransparentButton onClick={onClick}>
      <HeartIcon fill={fillHeartStatus} stroke={gray} />
    </TransparentButton>
  );
};

HeartFavorite.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

export default HeartFavorite;
