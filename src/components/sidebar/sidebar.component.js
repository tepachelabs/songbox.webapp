import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { MenuIcon } from 'components/icon';

import { MENU_ITEMS } from './sidebar.constants';
import {
  SidebarWrapper,
  SidebarDivisor,
  SidebarTitle,
  useSidebarStyles,
} from './sidebar.style';

export const Sidebar = ({ children }) => {
  const classes = useSidebarStyles();
  const [isOpen, setIsOpen] = useState();
  const [t] = useTranslation();
  const toggleDrawer = (open) => ({ type, key }) => {
    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon width={32} height={32} />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <SidebarWrapper>
          {children}
          <SidebarDivisor />
          <List>
            {MENU_ITEMS.map(({ title, link, icon: Icon }) => (
              <ListItem
                className={classes.button}
                key={title}
                button
                component={NavLink}
                to={link}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={t(`menu.${title}`)} />
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
