import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import SidebarData from './sidebar.config';
import Profile from '../Profile/index';
import Item from './Item';

import './styles/Sidebar.scss';

const Sidebar = () => {
  const nodeRef = React.useRef();

  const [sidebar, setSidebar] = useState(false);

  const darkThemeActive = useSelector((state) => state.player.darkTheme);
  const selectedIndex = useSelector((state) => state.sidebar.index);

  const showSidebar = useCallback((newState) => {
    if (newState !== undefined) {
      setSidebar(newState);
      return;
    }

    setSidebar(!sidebar);
  }, [sidebar]);

  useEffect(() => {
    showSidebar(false);
  }, [showSidebar, selectedIndex]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (nodeRef.current.contains(e.target)) {
        return;
      }

      e.stopPropagation();
      showSidebar(false);
    };

    document.addEventListener('mousedown', clickOutside, false);

    return () => {
      document.removeEventListener('mousedown', clickOutside, false);
    };
  }, [showSidebar]);

  return (
    <div ref={nodeRef}>
      <div className={`hamburger ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
        <button type="button" onClick={showSidebar}>
          <FaIcons.FaBars />
        </button>
      </div>
      <div className={`${sidebar ? 'sidebar active' : 'sidebar'} ${darkThemeActive ? 'dark-soft-theme-background' : ''}`}>
        <ul className="elements">
          <li className="navbar">
            <button type="button" className="close" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </button>
          </li>

          <li className="profile-container">
            <Profile />
          </li>
          {
            SidebarData.map((item, index) => (
              <Item
                key={item.title}
                index={index}
                item={item}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
};

export default Sidebar;
