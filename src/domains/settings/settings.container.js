import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  setLang,
  restorePreferences,
  setAutoPlay,
  setDarkTheme,
  setFullFilename,
} from 'store/actions/settingsActions';
import { SettingsComponent } from './settings.component';

const targetNameToAction = {
  isAutoPlayEnabled: setAutoPlay,
  isDarkThemeEnabled: setDarkTheme,
  isFullFilenameEnabled: setFullFilename,
};

export const SettingsContainer = () => {
  const dispatch = useDispatch();
  const [, i18next] = useTranslation();
  const isAutoPlayEnabled = useSelector(({ settings }) =>
    settings.get('isAutoPlay'),
  );
  const isDarkThemeEnabled = useSelector(({ settings }) =>
    settings.get('isDarkTheme'),
  );
  const isFullFilenameEnabled = useSelector(({ settings }) =>
    settings.get('isFullFilename'),
  );
  const appLanguage = useSelector(({ settings }) =>
    settings.get('appLanguage'),
  );

  const onSettingChange = ({ target }) => {
    const action = targetNameToAction[target.name];
    if (action) {
      dispatch(action(target.checked));
    }
  };

  const onRestoreClick = () => {
    dispatch(restorePreferences());
  };

  const onAppLanguageChange = (event) => {
    dispatch(setLang(event.target.value));
    i18next.changeLanguage(appLanguage);
  };

  return (
    <SettingsComponent
      isAutoPlayEnabled={isAutoPlayEnabled}
      isDarkThemeEnabled={isDarkThemeEnabled}
      isFullFilenameEnabled={isFullFilenameEnabled}
      onAppLanguageChange={onAppLanguageChange}
      onSettingChange={onSettingChange}
      onRestoreClick={onRestoreClick}
      appLanguage={appLanguage}
    />
  );
};
