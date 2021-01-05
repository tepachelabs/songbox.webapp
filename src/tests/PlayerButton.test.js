import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PlayerButton from 'components/AudioPlayer/PlayerButtons/PlayerButton';

import icon from 'components/AudioPlayer/icons/fast-forward.svg';

test('it should have correct className and be disabled', () => {
  const className = 'disabled-button';
  const mockFn = jest.fn();

  const component = render(
    <PlayerButton
      handleOnClick={mockFn}
      isDisabled={true}
      icon={icon}
      classStatus={className}
    />
  );

  const firstChild = component.container.firstChild;

  const componentHasCorrectClass = firstChild.className.includes(className);
  const isComponentDisabled = firstChild.disabled;
  fireEvent.click(firstChild);

  expect(componentHasCorrectClass).toBe(true);
  expect(isComponentDisabled).toBe(true);
  expect(mockFn).not.toHaveBeenCalled();
});

test('it should have correct className and be enabled', () => {
  const className = '';
  const mockFn = jest.fn();

  const component = render(
    <PlayerButton
      handleOnClick={mockFn}
      isDisabled={false}
      icon={icon}
      classStatus={className}
    />
  );

  const firstChild = component.container.firstChild;

  const componentHasCorrectClass = firstChild.className.includes(className);
  const isComponentDisabled = firstChild.disabled;
  fireEvent.click(firstChild);

  expect(componentHasCorrectClass).toBe(true);
  expect(isComponentDisabled).toBe(false);
  expect(mockFn).toHaveBeenCalled();

});