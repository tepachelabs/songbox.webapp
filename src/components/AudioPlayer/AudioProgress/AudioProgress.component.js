import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import './styles/progress.scss';

const AudioProgressComponent = ({
  progress,
  handleSetProgress,
  handleDragging,
  handleStopDragging,
}) => {
  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.style.background = `linear-gradient(90deg, #FFA834 0% ${progress}%, white ${progress}% 100%)`;
  }, [progress, inputRef]);

  return (
    <input
      min={0}
      max={100}
      step={1}
      value={progress}
      onChange={handleSetProgress}
      onMouseDown={handleDragging}
      onMouseUp={handleStopDragging}
      id="progress-input"
      type="range"
      ref={inputRef}
    />
  );
};

AudioProgressComponent.propTypes = {
  progress: propTypes.number.isRequired,
  handleSetProgress: propTypes.func.isRequired,
  handleDragging: propTypes.func.isRequired,
  handleStopDragging: propTypes.func.isRequired,
};

export default AudioProgressComponent;
