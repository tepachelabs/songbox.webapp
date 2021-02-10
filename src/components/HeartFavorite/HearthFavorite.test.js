import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import HeartFavorite from './HeartFavorite';

describe('HearthFavorite component', () => {
  test('it should render', () => {
    const mockFn = jest.fn();
    const isFavorite = false;

    render(<HeartFavorite onClick={mockFn} isFavorite={isFavorite} />);
  });

  test('it should render and be clicked', () => {
    const mockFn = jest.fn();
    const isFavorite = true;

    const component = render(
      <HeartFavorite onClick={mockFn} isFavorite={isFavorite} />,
    );

    const { firstChild } = component.container;
    fireEvent.click(firstChild);

    expect(mockFn).toHaveBeenCalled();
  });

  test('it should render and should not be clicked', () => {
    const mockFn = jest.fn();
    const isFavorite = true;

    render(<HeartFavorite onClick={mockFn} isFavorite={isFavorite} />);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
