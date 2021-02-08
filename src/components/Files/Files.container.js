import React, { Fragment, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { List, fromJS } from 'immutable';
import { useSelector, useDispatch } from 'react-redux';

import { getFilesFromPath } from 'store/actions/filesActions';
import { handleInteractionWithFavorite } from 'store/actions/favoritesActions';

import { isSongInFavorites } from 'Favorites/favorites';
import { HeartIcon } from 'components/icon';
import { FileListComponent } from '../file-list';

const transformPaths = (paths) => paths.map((path) => ({
  type: path.get('.tag'),
  title: path.get('name'),
  path: path.get('path_lower'),
}));

const FilesContainer = ({ path }) => {
  const [songs, setSongs] = useState(List());

  const files = useSelector((state) => state.files.get('files'));
  const favorites = useSelector((state) => state.favorites.get('songs'));
  const folders = useSelector((state) => state.files.get('folders'));
  const dispatch = useDispatch();

  const actions = [
    {
      icon: <HeartIcon />,
      alt: 'add to favorites',
      onClick: (songTitle, songPath) => {
        const isFavorite = isSongInFavorites(favorites, songPath);
        dispatch(handleInteractionWithFavorite(isFavorite, { songTitle, songPath }));
      },
    },
  ];

  const filesWithActions = transformPaths(files).map((file) => ({ ...file, actions }));

  useEffect(() => {
    dispatch(getFilesFromPath(path));
  }, [path, dispatch]);

  useEffect(() => {
    setSongs(fromJS(files));
  }, [files]);

  return (
    <Fragment>
      <FileListComponent
        files={transformPaths(folders)}
        dense={false}
      />
      <FileListComponent
        files={filesWithActions}
        songs={songs}
        dense={false}
      />
    </Fragment>
  );
};

FilesContainer.propTypes = {
  path: propTypes.string.isRequired,
};

export default FilesContainer;
