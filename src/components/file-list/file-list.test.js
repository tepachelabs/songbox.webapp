import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from 'store';

import { FileListComponent } from './file-list.component';

test('it renders', () => {
  const filesMock = fromJS([
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
  ]);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <FileListComponent
          itemsList={filesMock}
          itemRenderer={({ name }) => <div>{name}</div>}
        />
      </BrowserRouter>
    </Provider>,
  );
});
