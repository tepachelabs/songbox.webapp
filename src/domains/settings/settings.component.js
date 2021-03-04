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
          <Typography variant="subtitle2">
            {t('settings.player.desc')}
          </Typography>
        </Box>

        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isAutoPlayEnabled}
                  name="isAutoPlayEnabled"
                  onChange={onSettingChange}
                />
              }
              label={t('settings.player.autoplayLabel')}
            />
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Box mb={1}>
          <Typography variant="h6" color="textPrimary">
            {t('settings.appearance.title')}
          </Typography>
          <Typography variant="subtitle2">
            {t('settings.appearance.desc')}
          </Typography>
        </Box>

        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkThemeEnabled}
                  name="isDarkThemeEnabled"
                  onChange={onSettingChange}
                />
              }
              label={t('settings.appearance.darkThemeLabel')}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={isFullFilenameEnabled}
                  name="isFullFilenameEnabled"
                  onChange={onSettingChange}
                />
              }
              label={t('settings.appearance.showFileExtensionLabel')}
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
          <Typography>{t('settings.other.languageDesc')}</Typography>

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
          <Button
            color="secondary"
            onClick={onRestoreClick}
            variant="contained"
          >
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
