import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent } from '@testing-library/react';

import icon from 'components/AudioPlayer/icons/fast-forward.svg';

import PlayerButton from 'components/AudioPlayer/PlayerButtons/PlayerButton/';

test('it should have correct className and be disabled', () => {
  const className = 'disabled-button'

  const component = renderer.create(
    <PlayerButton
      handleOnClick={() => console.log('clicked')}
      isDisabled={true}
      icon={icon}
      classStatus={className}
    />
  );

  const tree = component.toJSON();

  const componentClassName = tree.props.className;
  const componentDisabled = tree.props.disabled;

  const checkClassName = componentClassName.includes(className)

  expect(checkClassName).toBe(true);
  expect(componentDisabled).toBe(true);
});

test('it should have correct className and be enabled', () => {
  const className = ''
  const mockFn = jest.fn();

  const component = renderer.create(
    <PlayerButton
      handleOnClick={mockFn}
      isDisabled={false}
      icon={icon}
      classStatus={className}
    />
  );

  const tree = component.toJSON();

  const propertyClassName = tree.props.className;
  const propertyDisabled = tree.props.disabled;

  const checkClassName = propertyClassName.includes(className)
  fireEvent.click(tree);

  expect(checkClassName).toBe(true);
  expect(propertyDisabled).toBe(false);
  expect(mockFn).toHaveBeenCalled(1);

});