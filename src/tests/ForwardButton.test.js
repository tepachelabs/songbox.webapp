import React from 'react';
import renderer from 'react-test-renderer';

import ForwardButtonComponent from '../components/AudioPlayer/PlayerButtons/Forward/ForwardButton.component';

test('Button should be disabled and should contain correct class', () => {
  const component = renderer.create(
    <ForwardButtonComponent
      isDisabled={true}
      playNextSong={() => console.log('test test test!')}
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
    <ForwardButtonComponent
      isDisabled={false}
      playNextSong={() => console.log('test test test!')}
    />
  );

  let tree = component.toJSON();
  const correctClass = tree.props.className.includes('disable-buttons');
  const isDisabled = tree.props.disabled;

  expect(correctClass).toBe(false);
  expect(isDisabled).toBe(false);
});