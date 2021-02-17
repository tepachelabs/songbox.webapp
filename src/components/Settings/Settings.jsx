import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import propTypes from 'prop-types';
import {
  FormControlLabel,
  Button,
  FormLabel,
  Box,
  Container,
  Paper,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { changeSidebarIndex } from 'store/actions';
import {
  setAutoPlay,
  setDarkTheme,
  setFullFilename,
  restorePreferences,
  setLang,
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
  const [t, i18next] = useTranslation();

  const autoPlayActive = useSelector((state) => state.settings.get('autoPlay'));
  const darkThemeActive = useSelector((state) =>
    state.settings.get('darkTheme'),
  );
  const fullFilename = useSelector((state) =>
    state.settings.get('fullFilename'),
  );
  const lang = useSelector((state) => state.settings.get('lang'));
  const classes = useStyles();

  useEffect(() => {
    dispatch(changeSidebarIndex(pageNumber));
    i18next.changeLanguage(lang);
  }, [dispatch, pageNumber, lang]);

  return (
    <Paper className={classes.paper}>
      <Typography id="your-personal-library" variant="h4">
        {t('settings.title')}
      </Typography>
      <Container>
        <Box className={classes.box}>
          <FormLabel component="legend">
            {t('settings.config.player.options.autoplay.label')}
          </FormLabel>
          <FormControlLabel
            control={
              <StyledSwitch
                onChange={() => dispatch(setAutoPlay(!autoPlayActive))}
                checked={autoPlayActive}
              />
            }
            label={t('settings.config.player.options.autoplay.label')}
          />
        </Box>
        <Box className={classes.box}>
          <FormLabel component="legend">
            {t('settings.config.apparience.label')}
          </FormLabel>
          <FormControlLabel
            control={
              <StyledSwitch
                onChange={() => dispatch(setDarkTheme(!darkThemeActive))}
                checked={darkThemeActive}
              />
            }
            label={t('settings.config.apparience.options.theme.label')}
          />
          <FormControlLabel
            control={
              <StyledSwitch
                // eslint-disable-next-line prettier/prettier
                optionTitle={t('settings.config.apparience.options.file-name.label')}
                onChange={() => dispatch(setFullFilename(!fullFilename))}
                checked={fullFilename}
              />
            }
            label={t('settings.config.apparience.options.file-name.label')}
          />
          <Box className={classes.box}>
            <FormControlLabel
              control={
                <Select
                  onChange={(event) => dispatch(setLang(event.target.value))}
                  value={lang}
                >
                  <MenuItem value="en-US">English</MenuItem>
                  <MenuItem value="es-MX">Español</MenuItem>
                </Select>
              }
              label={t('settings.config.apparience.options.lang.label')}
            />
          </Box>
        </Box>
        <Box className={classes.box}>
          <FormLabel component="legend">
            {t('settings.config.other.label')}
          </FormLabel>
          <Button
            variant="outlined"
            onClick={() => dispatch(restorePreferences())}
          >
            {t('settings.config.other.options.restore.label')}
          </Button>
        </Box>
      </Container>

      <Container>
        <p className={classes.p}>
          Copyright © 2020, Songbox. All rights reserved.
        </p>
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
