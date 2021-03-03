import React from 'react';
import propTypes from 'prop-types';
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { Sidebar } from 'components/sidebar';
import { UserProfile } from 'components/user-profile';
import { usePageStyles } from './page.styles';

export const Page = ({ title, children }) => {
  const classes = usePageStyles();

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Sidebar>
            <UserProfile />
          </Sidebar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

Page.propTypes = {
  title: propTypes.string,
  children: propTypes.any,
};

Page.defaultProps = {
  title: '',
};
