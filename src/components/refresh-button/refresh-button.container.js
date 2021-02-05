import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchFileListFromPath } from 'store/actions/filesActions';

import { RefreshButtonComponent } from './refresh-button.component';

export const RefreshButtonContainer = () => {
  const { path } = useParams();

  const dispatch = useDispatch();
  const getFilesFromCurrentPath = () => dispatch(fetchFileListFromPath(path || ''));

  return <RefreshButtonComponent event={getFilesFromCurrentPath} />;
};
