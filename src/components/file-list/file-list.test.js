import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { List } from 'immutable';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';

import { FileListComponent } from './file-list.component';
import { HeartIcon, MoreIcon } from '../icon';

test('it renders', () => {
  const actions = [
    {
      icon: <HeartIcon />,
      alt: 'add to favs',
      onClick: () => {},
    },
    {
      icon: <MoreIcon />,
      alt: 'toggle menu',
      onClick: () => {},
    },
  ];

  const filesMock = List([
    { type: 'folder', title: 'First folder' },
    { type: 'folder', title: 'Second folder' },
    {
      type: 'folder',
      title:
        'Really long folder name: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    { type: 'file', title: 'One', actions },
    {
      type: 'file',
      title:
        'Really long file name: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      actions,
    },
    { type: 'file', title: 'The last one', actions },
  ]);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <FileListComponent files={filesMock} dense={false} />
      </BrowserRouter>
    </Provider>,
  );
});
