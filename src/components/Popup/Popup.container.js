import React from 'react';
import propTypes from 'prop-types';

import useClickOutside from 'hooks/useClickOutside';
import PopupComponent from './Popup.component';

const PopupContainer = ({ type, isOpen, setIsOpen }) => {
  const nodeRef = useClickOutside(isOpen, () => {
    setIsOpen(false);
  });

  const showingComponent = new Map();
  showingComponent.set('error', <p>Service is not available.</p>);
  showingComponent.set('success', <p>Success</p>);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <PopupComponent
      handleClose={handleClose}
      isShowing={isOpen}
      showingElement={showingComponent.get(type)}
      isOpenRef={nodeRef}
    />
  );
};

PopupContainer.propTypes = {
  type: propTypes.string.isRequired,
  isOpen: propTypes.bool.isRequired,
  setIsOpen: propTypes.func.isRequired,
};

export default PopupContainer;
