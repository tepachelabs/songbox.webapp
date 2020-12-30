import React from 'react';
import renderer from 'react-test-renderer';

import RewindButtonComponent from '../components/AudioPlayer/PlayerButtons/Rewind/RewindButton.component';

test('Button should be disabled and should contain correct class', () => {
  const component = renderer.create(
    <RewindButtonComponent
      isDisabled={true}
      previousSong={() => console.log('test test test!')}
    />
  );

  let tree = component.toJSON();
  const correctClass = tree.props.className.includes('disable-buttons');
  const isDisabled = tree.props.disabled;

  expect(correctClass).toBe(true);
  expect(isDisabled).toBe(true);
});

test('Button should be enabled and should NOT contain the class disable-buttons', () => {
  const component = renderer.create(
    <RewindButtonComponent
      isDisabled={false}
      previousSong={() => console.log('test test test!')}
    />
  );

  let tree = component.toJSON();
  const correctClass = tree.props.className.includes('disable-buttons');
  const isDisabled = tree.props.disabled;

  expect(correctClass).toBe(false);
  expect(isDisabled).toBe(false);
});