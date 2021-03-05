import React from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon, ListItemText } from '@material-ui/core';

import { ListWrapper } from './file-list.style';
import { FileListItem } from './file-list-item/file-list-item.style';
import {
  FileListLoadingDummyIcon,
  LinearProgress,
} from './file-list-loading.style';

export const FileListLoading = ({ dense, itemsNumber }) => {
  const render = [...Array(itemsNumber)].map((_, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <FileListItem key={key}>
      <ListItemIcon>
        <FileListLoadingDummyIcon />
      </ListItemIcon>
      <ListItemText>
        <LinearProgress />
      </ListItemText>
    </FileListItem>
  ));

  return <ListWrapper dense={dense}>{render}</ListWrapper>;
};

FileListLoading.propTypes = {
  dense: PropTypes.bool,
  itemsNumber: PropTypes.number,
};

FileListLoading.defaultProps = {
  dense: false,
  itemsNumber: 8,
};
