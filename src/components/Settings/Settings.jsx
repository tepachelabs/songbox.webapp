import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import {
  FormControlLabel,
  Button,
  FormLabel,
  Box,
  Container,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { changeSidebarIndex } from 'store/actions';
import {
  setAutoPlay,
  setDarkTheme,
  setFullFilename,
  restorePreferences,
} from 'store/actions/settingsActions';
import { StyledSwitch } from 'components/Common';

const useStyles = makeStyles((theme) => ({
  palette: {
    type: theme.palette,
  },
  paper: {
    height: '100vh',
    backgroundColor: theme.palette.primary,
  },
  box: {
    margin: '40px auto',
  },
  p: {
    textAlign: 'center',
  },
}));

const Settings = ({ pageNumber }) => {
  const dispatch = useDispatch();

  const autoPlayActive = useSelector((state) => state.settings.get('autoPlay'));
  const darkThemeActive = useSelector((state) => state.settings.get('darkTheme'));
  const fullFilename = useSelector((state) => state.settings.get('fullFilename'));
  const classes = useStyles();

  useEffect(() => {
    dispatch(changeSidebarIndex(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <Paper className={classes.paper}>
      <h1 id="your-personal-library" className="title">Settings</h1>
      <Container>
        <Box className={classes.box}>
          <FormLabel component="legend">Autoplay next song</FormLabel>
          <FormControlLabel
            control={(
              <StyledSwitch
                onChange={() => dispatch(setAutoPlay(!autoPlayActive))}
                checked={autoPlayActive}
              />
            )}
            label="Autoplay next song"
          />
        </Box>
        <Box className={classes.box}>
          <FormLabel component="legend">Apparience</FormLabel>
          <FormControlLabel
            control={(
              <StyledSwitch
                onChange={() => dispatch(setDarkTheme(!darkThemeActive))}
                checked={darkThemeActive}
              />
            )}
            label="Toggle dark theme"
          />
          <FormControlLabel
            control={(
              <StyledSwitch
                optionTitle="Show full filename"
                onChange={() => dispatch(setFullFilename(!fullFilename))}
                checked={fullFilename}
              />
            )}
            label="Show full filename"
          />
        </Box>
        <Box className={classes.box}>
          <FormLabel component="legend">Other</FormLabel>
          <Button
            variant="outlined"
            onClick={() => dispatch(restorePreferences())}
          >
            Restore preferences
          </Button>
        </Box>
      </Container>

      <Container>
        <p className={classes.p}>Copyright © 2020, Songbox. All rights reserved.</p>
      </Container>
    </Paper>
  );
};

Settings.propTypes = {
  pageNumber: propTypes.number,
};

Settings.defaultProps = {
  pageNumber: 0,
};

export default Settings;
