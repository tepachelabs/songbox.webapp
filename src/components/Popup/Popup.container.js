import React, { useState } from 'react';
import propTypes from 'prop-types';

import useClickOutside from 'hooks/useClickOutside';
import PopupComponent from './Popup.component';

const PopupContainer = ({ type }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const nodeRef = useClickOutside(isPopupOpen, () => {
    setIsPopupOpen(false);
  });

  const showingComponent = new Map();
  showingComponent.set('error', <p>Service is not available.</p>);
  showingComponent.set('success', <p>Success</p>);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <PopupComponent
      handleClose={handleClose}
      isShowing={isPopupOpen}
      showingElement={showingComponent.get(type)}
      isOpenRef={nodeRef}
    />
  );
};

PopupContainer.propTypes = {
  type: propTypes.string.isRequired,
};

export default PopupContainer;
