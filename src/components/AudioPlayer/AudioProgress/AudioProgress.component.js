import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import './styles/progress.scss';

const AudioProgressComponent = ({
  progress,
  handleSetProgress,
  handleDragging,
  handleStopDragging,
}) => {
  const queue = useSelector((state) => state.songsQueue.get('queue'));
  const isQueueEmpty = queue.size === 0;

  const inputRef = React.createRef();

  return (
    <input
      min={0}
      max={100}
      step={1}
      value={progress}
      onChange={handleSetProgress}
      onMouseDown={handleDragging}
      onMouseUp={handleStopDragging}
      onTouchEndCapture={handleStopDragging}
      id="progress-input"
      type="range"
      ref={inputRef}
      disabled={isQueueEmpty}
      className={`progress-${progress}`}
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
