import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  CssBaseline,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';

import { muiTheme } from './mui-theme';
import { theme } from './theme';

export default function StyleProvider({ children }) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
