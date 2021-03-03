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
    settings.get('autoPlay'),
  );
  const isDarkThemeEnabled = useSelector(({ settings }) =>
    settings.get('darkTheme'),
  );
  const isFullFilenameEnabled = useSelector(({ settings }) =>
    settings.get('fullFilename'),
  );
  const userLanguage = useSelector((state) => state.settings.get('lang'));

  const onSettingChange = ({ target }) => {
    const action = targetNameToAction[target.name];
    if (action) {
      dispatch(action(target.checked));
    }
  };

  const onRestoreClick = () => {
    dispatch(restorePreferences());
  };

  const onLanguageChange = (event) => {
    dispatch(setLang(event.target.value));
    i18next.changeLanguage(userLanguage);
  };

  return (
    <SettingsComponent
      isAutoPlayEnabled={isAutoPlayEnabled}
      isDarkThemeEnabled={isDarkThemeEnabled}
      isFullFilenameEnabled={isFullFilenameEnabled}
      onLanguageChange={onLanguageChange}
      onSettingChange={onSettingChange}
      onRestoreClick={onRestoreClick}
      userLanguage={userLanguage}
    />
  );
};
