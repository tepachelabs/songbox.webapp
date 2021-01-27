import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getFilesFromPath } from 'store/actions/filesActions';
import { FileListComponent } from '../file-list';

const transformPaths = (paths) => paths.map((path) => ({
  type: path.get('.tag'),
  title: path.get('name'),
  path: path.get('path_lower'),
}));

const FilesContainer = ({ path }) => {
  const files = useSelector((state) => state.files.get('files'));
  const folders = useSelector((state) => state.files.get('folders'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilesFromPath(path));
  }, [path, dispatch]);

  return (
    <Fragment>
      <FileListComponent files={transformPaths(folders)} dense={false} />
      <FileListComponent files={transformPaths(files)} dense={false} />
    </Fragment>
  );
};

FilesContainer.propTypes = {
  path: propTypes.string.isRequired,
};

export default FilesContainer;
