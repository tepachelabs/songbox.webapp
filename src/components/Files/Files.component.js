import propTypes from 'prop-types';
import React from 'react';
import { List } from 'immutable';

import LinkToFolder from './LinkToFolder';
import LinkToSongContainer from './LinkToSong';

import './style/files.scss';

const FilesComponent = ({ files, folders }) => (
  <div className="files-container">
    {
      folders.map((folder) => (
        <LinkToFolder
          key={folder.get('name')}
          path={folder.get('path_lower')}
          name={folder.get('name')}
        />
      ))
    }

    {
      files.map((song, index) => (
        <LinkToSongContainer
          key={song.get('name')}
          index={index}
          fileName={song.get('name')}
          samePlaylist={false}
          files={files}
          path={song.get('path_lower')}
          inFavorites={false}
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
