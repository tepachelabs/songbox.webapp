import propTypes from 'prop-types';
import React from 'react';
import { List } from 'immutable';

import LinkToFolder from './LinkToFolder';
import LinkToSong from './LinkToSong';

import './style/files.scss';

const FilesComponent = ({ files, folders }) => (
  <div className="files-container">
    {
      folders.map((folder) => (
        <LinkToFolder key={folder.get('name')} folder={folder} />
      ))
    }

    {
      files.map((song, index) => (
        <LinkToSong
          key={song.get('name')}
          fileName={song.get('name')}
          path={song.get('path_lower')}
          songIndex={index}
        />
      ))
    }
  </div>
);

FilesComponent.propTypes = {
  files: propTypes.instanceOf(List).isRequired,
  folders: propTypes.instanceOf(List).isRequired,
};

export default FilesComponent;
