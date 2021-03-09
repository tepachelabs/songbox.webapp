import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

import { getContentsFromPath } from 'store/actions/filesActions';

export const RefreshButton = () => {
  const { path = '' } = useParams();
  const dispatch = useDispatch();
  const getFilesFromCurrentPath = () => dispatch(getContentsFromPath(path));
  const [t] = useTranslation();

  return (
    <Button
      color="primary"
      onClick={getFilesFromCurrentPath}
      variant="contained"
    >
      {t('home.refresh')}
    </Button>
  );
};
