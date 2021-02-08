import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Divider, IconButton, List } from '@material-ui/core';

import {
  HeartIcon,
  MoreIcon,
  SettingsIcon,
} from 'components/icon';

import { FileListItemComponent } from './file-list-item.component';

export default {
  component: FileListItemComponent,
  title: 'FileListItem',
};

const noop = () => {};

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ padding: 8, background: 'white' }}>
    <List>
      { children }
    </List>
  </div>
);
const SecondaryActions = () => (
  <React.Fragment>
    <IconButton edge="end" aria-label="comments" onClick={noop}>
      <HeartIcon />
    </IconButton>
    <IconButton edge="end" aria-label="comments" onClick={noop}>
      <MoreIcon />
    </IconButton>
  </React.Fragment>
);
// eslint-disable-next-line react/prop-types
export const FileListItem = () => {
  const title1 = text('title1', 'Default item');
  const title2 = text('title2', 'Item with icon');
  const title3 = text('title3', 'Item with secondary actions');
  const title4 = text('title4', 'Complete example');

  return (
    <Wrapper>
      <Divider />
      {/* Default */}
      <FileListItemComponent onClick={noop} title={title1} />
      <Divider />
      {/* With icon */}
      <FileListItemComponent onClick={noop} title={title2} icon={<HeartIcon />} />
      <Divider />
      {/* With secondary actions */}
      <FileListItemComponent onClick={noop} title={title3}>
        <SecondaryActions />
      </FileListItemComponent>
      <Divider />
      {/* With icon & secondary actions */}
      <FileListItemComponent onClick={noop} title={title4} icon={<SettingsIcon />}>
        <SecondaryActions />
      </FileListItemComponent>
    </Wrapper>
  );
};
