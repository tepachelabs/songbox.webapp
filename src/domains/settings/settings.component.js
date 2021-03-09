import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@material-ui/core';

export const SettingsComponent = ({
  isAutoPlayEnabled,
  isDarkThemeEnabled,
  isFullFilenameEnabled,
  onAppLanguageChange,
  onSettingChange,
  onRestoreClick,
  appLanguage,
}) => {
  const [t] = useTranslation();

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Box mb={1}>
          <Typography variant="h6" color="textPrimary">
            {t('settings.player.title')}
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            {t('settings.player.desc')}
          </Typography>
        </Box>

        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isAutoPlayEnabled}
                  color="primary"
                  name="isAutoPlayEnabled"
                  onChange={onSettingChange}
                />
              }
              label={
                <Typography color="textPrimary">
                  {t('settings.player.autoplayLabel')}
                </Typography>
              }
            />
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Box mb={1}>
          <Typography variant="h6" color="textPrimary">
            {t('settings.appearance.title')}
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            {t('settings.appearance.desc')}
          </Typography>
        </Box>

        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkThemeEnabled}
                  color="primary"
                  name="isDarkThemeEnabled"
                  onChange={onSettingChange}
                />
              }
              label={
                <Typography color="textPrimary">
                  {t('settings.appearance.darkThemeLabel')}
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={isFullFilenameEnabled}
                  color="primary"
                  name="isFullFilenameEnabled"
                  onChange={onSettingChange}
                />
              }
              label={
                <Typography color="textPrimary">
                  {t('settings.appearance.showFileExtensionLabel')}
                </Typography>
              }
            />
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Box mb={1}>
          <Typography variant="h6" color="textPrimary">
            {t('settings.other.title')}
          </Typography>
        </Box>

        <Box mb={2}>
          <Typography color="textPrimary">
            {t('settings.other.languageDesc')}
          </Typography>

          <FormControl>
            <InputLabel>{t('settings.other.languageLabel')}</InputLabel>
            <Select
              autoWidth
              name="appLanguage"
              onChange={onAppLanguageChange}
              value={appLanguage}
            >
              <MenuItem value="en-US">English</MenuItem>
              <MenuItem value="es-MX">Español</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Button color="primary" onClick={onRestoreClick} variant="contained">
            {t('settings.other.restoreLabel')}
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

SettingsComponent.propTypes = {
  isAutoPlayEnabled: PropTypes.bool.isRequired,
  isDarkThemeEnabled: PropTypes.bool.isRequired,
  isFullFilenameEnabled: PropTypes.bool.isRequired,
  onAppLanguageChange: PropTypes.func.isRequired,
  onSettingChange: PropTypes.func.isRequired,
  onRestoreClick: PropTypes.func.isRequired,
  appLanguage: PropTypes.string.isRequired,
};
