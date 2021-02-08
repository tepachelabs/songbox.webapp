import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { PlayerButton } from './player-button.component';

test('it should be disabled and should NOT be clickable', () => {
  const mockFn = jest.fn();

  const component = render(
    <PlayerButton onClick={mockFn} disabled />,
  );

  const { firstChild } = component.container;

  const isComponentDisabled = firstChild.disabled;
  fireEvent.click(firstChild);

  expect(isComponentDisabled).toBe(true);
  expect(mockFn).not.toHaveBeenCalled();
});

test('it should be enabled and it should be clickable', () => {
  const mockFn = jest.fn();

  const component = render(
    <PlayerButton onClick={mockFn} disabled={false} />,
  );

  const { firstChild } = component.container;

  const isComponentDisabled = firstChild.disabled;
  fireEvent.click(firstChild);

  expect(isComponentDisabled).toBe(false);
  expect(mockFn).toHaveBeenCalled();
});
