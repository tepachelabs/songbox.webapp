import React from 'react';
import propTypes from 'prop-types';

import './styles/pupup.scss';

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
      </div>
      <button type="button" onClick={handleClose}>Close</button>
    </div>
  );
};

PopupComponent.propTypes = {
  handleClose: propTypes.func.isRequired,
  isShowing: propTypes.bool.isRequired,
  isOpenRef: propTypes.shape({ current: propTypes.instanceOf(Element) }).isRequired,
  showingElement: propTypes.node.isRequired,
};

export default PopupComponent;
