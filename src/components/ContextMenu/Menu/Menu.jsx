import React from 'react';
import propTypes from 'prop-types';
import useClickOutside from '../../../hooks/useClickOutside';
import Option from '../Option';

import '../styles/contextmenu.scss';

const Menu = ({ menuShowing, setShowMenu }) => {
  const nodeRef = useClickOutside(menuShowing, () => { setShowMenu(false); });

  return (
    <ul ref={nodeRef} className={`menu-options ${menuShowing ? '' : 'hide'}`}>
      <Option optionText="Option one" onClick={() => setShowMenu(false)} />
      <Option optionText="Option two" onClick={() => setShowMenu(false)} />
      <Option optionText="Option three" onClick={() => setShowMenu(false)} />
      <Option optionText="Close" onClick={() => setShowMenu(false)} />
    </ul>
  );
};

Menu.defaultProps = {
  menuShowing: false,
  setShowMenu: undefined,
};

Menu.propTypes = {
  menuShowing: propTypes.bool,
  setShowMenu: propTypes.func,
};

export default Menu;
