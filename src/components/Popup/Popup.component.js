import React from 'react';
import propTypes from 'prop-types';

import './styles/popup.scss';

const PopupComponent = ({
  handleClose,
  isShowing,
  isOpenRef,
  showingElement,
}) => {
  const isHiddenClassName = isShowing ? '' : 'hide-popup';

  return (
    <div className={`popup-background ${isHiddenClassName}`}>
      <div ref={isOpenRef} className="show-popup">
        { showingElement }
        <button type="button" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

PopupComponent.propTypes = {
  handleClose: propTypes.func.isRequired,
  isShowing: propTypes.bool.isRequired,
  isOpenRef: propTypes.shape({ current: propTypes.instanceOf(Node) }).isRequired,
  showingElement: propTypes.node.isRequired,
};

export default PopupComponent;
