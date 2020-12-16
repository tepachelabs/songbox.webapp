/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';

const AudioComponent = ({ autoPlay, songLink }) => (
  <div className="">
    <audio id="" controls autoPlay={autoPlay}>
      <track kind="captions" />
      <source src={songLink} type="audio/mpeg" />
      <source src={songLink} type="audio/wav" />
      <source src={songLink} type="audio/ogg" />
    </audio>
  </div>
);

AudioComponent.propTypes = {
  autoPlay: propTypes.bool,
  songLink: propTypes.string,
};

AudioComponent.defaultProps = {
  autoPlay: true,
  songLink: propTypes.string.isRequired,
};

export default AudioComponent;
