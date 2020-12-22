import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import Profile from '../Profile';
import Item from './Item';

import SidebarData from './sidebar.config';

import './styles/Sidebar.scss';

const SidebarComponent = ({ sidebarShowing, setShowingSidebar, nodeRef }) => {
  const darkThemeActive = useSelector((state) => state.settings.get('darkTheme'));

  return (
    <div ref={nodeRef}>
      <div className={`hamburger ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
        <button type="button" onClick={() => setShowingSidebar(true)}>
          <FaIcons.FaBars />
        </button>
      </div>
      <div className={`${sidebarShowing ? 'sidebar active' : 'sidebar'} ${darkThemeActive ? 'dark-soft-theme-background' : ''}`}>
        <ul className="elements">
          <li className="navbar">
            <button type="button" className="close" onClick={() => setShowingSidebar(false)}>
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

SidebarComponent.propTypes = {
  sidebarShowing: propTypes.bool.isRequired,
  setShowingSidebar: propTypes.func.isRequired,
  nodeRef: propTypes.instanceOf(Object).isRequired,
};

export default SidebarComponent;
