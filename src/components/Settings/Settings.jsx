import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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

export const Settings = () => {
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

  const onChange = (event) => {
    dispatch(setLang(event.target.value));
    i18next.changeLanguage(lang);
  };

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
                <Select onChange={onChange} value={lang}>
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
          Copyright © 2021, Songbox. All rights reserved.
        </p>
      </Container>
    </Paper>
  );
};
