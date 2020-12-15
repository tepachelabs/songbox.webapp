import React from 'react';
import propTypes from 'prop-types';

import OptionSection from './OptionSection';
import OptionToggle from './OptionToggle';
import Option from './Option';

const SettingsComponent = ({
  toggleAutoPlay,
  autoPlayActive,
  toggleDarkTheme,
  darkThemeActive, toggleFullFilename,
  fullFilename,
  restorePreferences,
}) => (
  <div className={`content-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
    <h1 id="your-personal-library" className="title">Settings</h1>
    <hr className="solid-gray-bar" />
    <div className={`settings-container ${darkThemeActive ? 'dark-theme-background dark-theme-color' : ''}`}>
      <OptionSection title="Player">
        <OptionToggle
          optionTitle="Autoplay next song"
          toggle={toggleAutoPlay}
          checked={autoPlayActive}
        />
      </OptionSection>

      <OptionSection title="Apparience">
        <OptionToggle
          optionTitle="Toggle dark theme"
          toggle={toggleDarkTheme}
          checked={darkThemeActive}
        />
        <OptionToggle
          optionTitle="Show full filename"
          toggle={toggleFullFilename}
          checked={fullFilename}
        />
      </OptionSection>

      <OptionSection title="Other">
        <Option
          optionText="Restore preferences"
          onClick={restorePreferences}
          option="pref"
        />
      </OptionSection>

      <div className="copy-right-container">
        <p className="copy-right">Copyright © 2020, Songbox. All rights reserved.</p>
      </div>
    </div>
  </div>
);

SettingsComponent.propTypes = {
  toggleAutoPlay: propTypes.func.isRequired,
  autoPlayActive: propTypes.bool.isRequired,
  toggleDarkTheme: propTypes.func.isRequired,
  darkThemeActive: propTypes.bool.isRequired,
  toggleFullFilename: propTypes.func.isRequired,
  fullFilename: propTypes.bool.isRequired,
  restorePreferences: propTypes.func.isRequired,
};

export default SettingsComponent;
