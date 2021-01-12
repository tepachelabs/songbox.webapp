import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import store from 'store';
import LinkToSongComponent from 'components/Files/LinkToSong/LinkToSong.component';

describe('link to song', () => {
  test('it should render, should have correct className and be able to click it', () => {
    const className = 'is-playing';
    const mockFn = jest.fn();

    const component = render(
      <Provider store={store}>
        <LinkToSongComponent
          path="/my/music/something.mp3"
          isPlaying
          fileName="something.mp3"
          selectSong={mockFn}
        />
      </Provider>,
    );

    const { firstChild } = component.container;
    const button = firstChild.firstChild.nextSibling;

    const componentHasCorrectClassName = firstChild.className.includes(className);
    fireEvent.click(button);

    expect(componentHasCorrectClassName).toBe(true);
    expect(mockFn).toHaveBeenCalled();
  });

  test('it should render, should have correct className and will not click', () => {
    const className = '';
    const mockFn = jest.fn();

    const component = render(
      <Provider store={store}>
        <LinkToSongComponent
          path="/my/music/something.mp3"
          isPlaying
          fileName="something.mp3"
          selectSong={mockFn}
        />
      </Provider>,
    );

    const { firstChild } = component.container;
    const componentHasCorrectClassName = firstChild.className.includes(className);

    expect(componentHasCorrectClassName).toBe(true);
    expect(mockFn).not.toHaveBeenCalled();
  });
});
