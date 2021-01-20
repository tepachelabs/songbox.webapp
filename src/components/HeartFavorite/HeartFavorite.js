import React from 'react';
import propTypes from 'prop-types';

import { softGray } from 'style/colors';
import { HeartIcon } from 'components/icon';

import {
  HeartButton,
  HeartIconWrapper,
} from './HeartFavorite.style';

const HeartFavorite = ({
  isFavorite,
  onButtonClick,
}) => {
  const fillHeartStatus = isFavorite ? softGray : 'none';

  return (
    <HeartButton onClick={onButtonClick}>
      <HeartIconWrapper>
        <HeartIcon
          fill={fillHeartStatus}
          stroke={softGray}
        />
      </HeartIconWrapper>
    </HeartButton>
  );
};

HeartFavorite.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  onButtonClick: propTypes.func.isRequired,
};

export default HeartFavorite;
