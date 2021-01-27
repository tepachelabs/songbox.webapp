import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { canPlayPreviousSong } from 'store/selectors/songsQueue';
import { PlayerButton } from 'style/button';

import { RewindIcon } from 'components/icon';
import { gray } from 'style/colors';

const RewindButton = ({ onClick }) => {
  const canRewind = useSelector((state) => canPlayPreviousSong(state));
  const isDisabled = !canRewind;

  return (
    <PlayerButton onClick={onClick} disabled={isDisabled}>
      <RewindIcon stroke={gray} fill={gray} />
    </PlayerButton>
  );
};

RewindButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default RewindButton;
