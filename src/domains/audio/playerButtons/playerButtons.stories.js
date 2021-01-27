import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { RouterDecorator } from 'stories/decorators';

import {
  PlayButton,
  RepeatButton,
  ForwardButton,
  RewindButton,
  ShuffleButton,
} from './index';

const buttons = [
  RepeatButton,
  RewindButton,
  PlayButton,
  ForwardButton,
  ShuffleButton,
];

export default {
  component: PlayButton,
  title: 'playerButtons',
  decorators: [(Story) => (<RouterDecorator><Story /></RouterDecorator>)],
};

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => <div style={{ display: 'flex', flexWrap: 'wrap' }}>{ children }</div>;

const Template = () => (
  <Provider store={store}>
    <Container>
      {
        buttons.map((Button) => <Button />)
      }
    </Container>
  </Provider>
);

export const Home = Template.bind({});
