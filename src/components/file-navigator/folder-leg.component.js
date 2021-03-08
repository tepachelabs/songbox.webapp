import React from 'react';
import propTypes from 'prop-types';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import { FolderOutlined } from '@material-ui/icons';

import { APP_PATH } from 'routes';
import { FileListItemComponent } from 'components/file-list';

export const FolderLeg = ({ item }) => (
  <FileListItemComponent
    component={Link}
    to={`${APP_PATH}${item.get('path')}`}
    name={item.get('name')}
    icon={<FolderOutlined color="primary" />}
  />
);

FolderLeg.propTypes = {
  item: propTypes.instanceOf(Map).isRequired,
};
