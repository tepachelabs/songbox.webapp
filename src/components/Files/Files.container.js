import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getFilesFromPath } from 'store/actions/filesActions';
import { handleInteractionWithFavorite } from 'store/actions/favoritesActions';

import { isSongInFavorites } from 'Favorites/favorites';
import { HeartIcon } from 'components/icon';
import { Loading } from 'domains/core/Loading';
import { FileListComponent } from '../file-list';

const transformPaths = (paths) =>
  paths.map((path) => ({
    type: path.get('.tag'),
    title: path.get('name'),
    path: path.get('path_lower'),
  }));

const FilesContainer = ({ path }) => {
  const files = useSelector((state) => state.files.get('files'));
  const favorites = useSelector((state) => state.favorites.get('songs'));
  const folders = useSelector((state) => state.files.get('folders'));
  const isLoading = useSelector((state) => state.files.get('isLoading'));
  const dispatch = useDispatch();

  const actions = [
    {
      icon: <HeartIcon />,
      alt: 'add to favorites',
      onClick: (songTitle, songPath) => {
        const isFavorite = isSongInFavorites(favorites, songPath);
        dispatch(
          handleInteractionWithFavorite(isFavorite, { songTitle, songPath }),
        );
      },
    },
  ];

  const filesWithActions = transformPaths(files).map((file) => ({
    ...file,
    actions,
  }));

  useEffect(() => {
    dispatch(getFilesFromPath(path));
  }, [path, dispatch]);

  return (
    isLoading
      ? (<Loading />)
      : (
        <Fragment>
          <FileListComponent files={transformPaths(folders)} dense={false} />
          <FileListComponent files={filesWithActions} songs={files} dense={false} />
        </Fragment>
      )
  );
};

FilesContainer.propTypes = {
  path: propTypes.string.isRequired,
};

export default FilesContainer;
