import React from 'react';
import propTypes from 'prop-types';

import { softGray } from 'style/colors';
import { HeartButton } from 'style/button';
import { HeartIcon } from 'components/icon';

const HeartFavorite = ({
  isFavorite,
  onButtonClick,
}) => {
  const fillHeartStatus = isFavorite ? softGray : 'none';

  return (
    <HeartButton onClick={onButtonClick}>
      <HeartIcon
        fill={fillHeartStatus}
        stroke={softGray}
      />
    </HeartButton>
  );
};

HeartFavorite.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  onButtonClick: propTypes.func.isRequired,
};

export default HeartFavorite;
