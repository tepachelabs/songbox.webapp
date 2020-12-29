import React from 'react';
import propTypes from 'prop-types';

import '../style/progress.scss';

const AudioProgressComponent = ({
  progress, changeSongSecond, startDragging, stopDragging,
}) => (
  <input
    min={0}
    max={100}
    step={1}
    value={progress}
    onChange={(e) => changeSongSecond(parseInt(e.target.value, 10))}
    onMouseDown={startDragging}
    onMouseUp={stopDragging}
    id="progress-input"
    type="range"
  />
);

AudioProgressComponent.propTypes = {
  progress: propTypes.number.isRequired,
  changeSongSecond: propTypes.func.isRequired,
  startDragging: propTypes.func.isRequired,
  stopDragging: propTypes.func.isRequired,
};

export default AudioProgressComponent;
