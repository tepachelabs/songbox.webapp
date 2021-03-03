import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import {
  CssBaseline,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';

import MuiThemeFactory from './mui-theme';
import { light, dark } from './theme';

export default function StyleProvider({ children }) {
  const isDarkThemeActive = useSelector((state) =>
    state.settings.get('darkTheme'),
  );
  const muiTheme = MuiThemeFactory.create(isDarkThemeActive);
  const styledTheme = isDarkThemeActive ? dark : light;

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
