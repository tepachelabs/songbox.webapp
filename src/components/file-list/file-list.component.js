import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { ListWrapper } from './file-list.style';

export const FileListComponent = ({
  dense,
  itemsList,
  itemRenderer: ItemRenderer,
}) => (
  <ListWrapper dense={dense}>
    {itemsList.map((item) => (
      <ItemRenderer key={item.get('name')} item={item} />
    ))}
  </ListWrapper>
);

FileListComponent.propTypes = {
  itemsList: PropTypes.instanceOf(List).isRequired,
  dense: PropTypes.bool,
  itemRenderer: PropTypes.any.isRequired,
};

FileListComponent.defaultProps = {
  dense: false,
};
