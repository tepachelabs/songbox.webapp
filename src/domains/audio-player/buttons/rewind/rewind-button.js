import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { canPlayPreviousSong } from 'store/selectors/songsQueue';
import { PlayerRegularButton } from 'style/button';

import { RewindIcon } from 'components/icon';
import { darkGray } from 'style/colors';

const RewindButton = ({ onClick }) => {
  const canRewind = useSelector((state) => canPlayPreviousSong(state));
  const isDisabled = !canRewind;

  return (
    <PlayerRegularButton onClick={onClick} disabled={isDisabled}>
      <RewindIcon stroke={darkGray} fill={darkGray} />
    </PlayerRegularButton>
  );
};

RewindButton.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default RewindButton;
