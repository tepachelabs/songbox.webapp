import React, { Fragment, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getContentsFromPath } from 'store/actions/filesActions';
import { Loading } from 'domains/core/Loading';
import { FileListComponent } from 'components/file-list';
import { FolderLeg } from './folder-leg.component';
import { AudioLeg } from './audio-leg.component';

export const FileNavigator = ({ path }) => {
  const files = useSelector((state) => state.files.get('files'));
  const folders = useSelector((state) => state.files.get('folders'));
  const isLoading = useSelector((state) => state.files.get('isLoading'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsFromPath(path));
  }, [path, dispatch]);

  if (isLoading) return <Loading />;

  return (
    <Fragment>
      <FileListComponent itemsList={folders} itemRenderer={FolderLeg} />
      <FileListComponent itemsList={files} itemRenderer={AudioLeg} />
    </Fragment>
  );
};

FileNavigator.propTypes = {
  path: propTypes.string.isRequired,
};
