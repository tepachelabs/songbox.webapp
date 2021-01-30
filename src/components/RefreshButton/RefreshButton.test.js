import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RefreshButton from './RefreshButton.component';

describe('RefreshButton component', () => {
  it('should render and be clicked', () => {
    const mockFn = jest.fn();
    const component = render(<RefreshButton event={mockFn} />);

    const { firstChild } = component.container;
    fireEvent.click(firstChild);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should render and not be clicked', () => {
    const mockFn = jest.fn();
    render(<RefreshButton event={mockFn} />);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
