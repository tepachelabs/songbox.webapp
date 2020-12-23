import React from 'react';
import propTypes from 'prop-types';

const AudioComponent = ({ autoPlay, songLink, audioRef }) => (
  <div className="audio">
    <audio controls ref={audioRef} autoPlay={autoPlay}>
      <track kind="captions" />
      <source src={songLink} type="audio/mpeg" />
      <source src={songLink} type="audio/wav" />
      <source src={songLink} type="audio/ogg" />
    </audio>
  </div>
);

AudioComponent.propTypes = {
  autoPlay: propTypes.bool.isRequired,
  songLink: propTypes.string.isRequired,
  audioRef: propTypes.shape({ current: propTypes.instanceOf(Element) })
};

export default AudioComponent;
