import React from 'react';
import propTypes from 'prop-types';

import {
  HeartButton,
  HeartIcon,
} from './HeartFavorite.style';

const HeartFavoriteComponent = ({
  isFavorite,
  onButtonClick,
}) => {
  const fillHeartStatus = isFavorite ? '#8A8A8A' : 'none';

  return (
    <HeartButton onClick={onButtonClick}>
      <HeartIcon>
        <svg className="feather feather-heart heart-icon icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fillHeartStatus} stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </HeartIcon>
    </HeartButton>
  );
};

HeartFavoriteComponent.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  onButtonClick: propTypes.func.isRequired,
};

export default HeartFavoriteComponent;
