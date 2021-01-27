import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilesFromPath } from 'store/actions/filesActions';
import { FileListComponent } from '../file-list';

const transformPaths = (paths) => paths.map((path) => ({
  type: path.get('.tag'),
  title: path.get('name'),
}));

const FilesContainer = ({ path }) => {
  const files = useSelector((state) => state.files.get('files'));
  const folders = useSelector((state) => state.files.get('folders'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilesFromPath(path));
  }, [path, dispatch]);

  return (
    <React.Fragment>
      <FileListComponent files={transformPaths(folders)} dense={false} />
      <FileListComponent files={transformPaths(files)} dense={false} />
    </React.Fragment>
  );
};

FilesContainer.propTypes = {
  path: propTypes.string.isRequired,
};

export default FilesContainer;
