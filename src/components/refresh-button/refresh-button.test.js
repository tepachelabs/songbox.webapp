import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RefreshButtonComponent } from './refresh-button.component';

describe('refresh-button component', () => {
  it('should render and be clicked', () => {
    const mockFn = jest.fn();
    const component = render(<RefreshButtonComponent onClick={mockFn} />);

    const { firstChild } = component.container;
    fireEvent.click(firstChild);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should render and not be clicked', () => {
    const mockFn = jest.fn();
    render(<RefreshButtonComponent onClick={mockFn} />);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
