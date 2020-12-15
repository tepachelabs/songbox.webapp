import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import SettingsComponent from './Settings.component';

import { changeSlidebarIndex } from '../../store/actions';
import {
  restorePreferences,
  setAutoPlay,
  setDarkTheme,
  setFullFilename,
} from '../../store/actions/settingsActions';

import './styles/settings.scss';

const SettingsContainer = ({ pageNumber }) => {
  const autoPlay = useSelector((state) => state.settings.autoPlay);
  const darkTheme = useSelector((state) => state.settings.darkTheme);
  const fullFilename = useSelector((state) => state.settings.fullFilename);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSlidebarIndex(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <SettingsComponent
      toggleAutoPlay={() => dispatch(setAutoPlay(!autoPlay))}
      autoPlayActive={autoPlay}
      toggleDarkTheme={() => dispatch(setDarkTheme(!darkTheme))}
      darkThemeActive={darkTheme}
      toggleFullFilename={() => dispatch(setFullFilename(!fullFilename))}
      fullFilename={fullFilename}
      restorePreferences={() => dispatch(restorePreferences())}
    />
  );
};

SettingsContainer.propTypes = {
  pageNumber: propTypes.number,
};

SettingsContainer.defaultProps = {
  pageNumber: 0,
};

export default SettingsContainer;
