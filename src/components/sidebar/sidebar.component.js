import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { MenuIcon } from 'components/icon';
import { Button } from 'style/button';
import { orange } from 'style/colors';

import { MENU_ITEMS } from './sidebar.constants';
import { SidebarWrapper, SidebarDivisor, SidebarTitle } from './sidebar.style';

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState();
  const toggleDrawer = (open) => ({ type, key }) => {
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Fragment>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon stroke={orange} width={32} height={32} />
      </Button>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <SidebarWrapper>
          {children}
          <SidebarDivisor />
          <List>
            {MENU_ITEMS.map(({ title, link, icon: Icon }) => (
              <ListItem
                key={title}
                button
                component={NavLink}
                to={link}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText disableTypography primary={title} />
              </ListItem>
            ))}
          </List>
          <SidebarTitle>Songbox</SidebarTitle>
        </SidebarWrapper>
      </Drawer>
    </Fragment>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
