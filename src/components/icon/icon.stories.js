import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import colors from 'style/colors';
import {
  MenuIcon,
  HomeIcon,
  PlayCircleIcon,
  SettingsIcon,
  ShuffleIcon,
  MoreIcon,
  LogOutIcon,
  HelpCircleIcon,
  HeartIcon,
  RewindIcon,
  PauseCircleIcon,
  RepeatIcon,
  FastForwardIcon,
} from 'components/icon';

const icons = [
  { component: HomeIcon, title: 'HomeIcon' },
  { component: LogOutIcon, title: 'LogOutIcon' },
  { component: HeartIcon, title: 'HeartIcon' },
  { component: HelpCircleIcon, title: 'HelpCircleIcon' },
  { component: MenuIcon, title: 'MenuIcon' },
  { component: MoreIcon, title: 'MoreIcon' },
  { component: SettingsIcon, title: 'SettingsIcon' },
  { component: RepeatIcon, title: 'RepeatIcon' },
  { component: RewindIcon, title: 'RewindIcon' },
  { component: PlayCircleIcon, title: 'PlayCircleIcon' },
  { component: PauseCircleIcon, title: 'PauseCircleIcon' },
  { component: FastForwardIcon, title: 'FastForwardIcon' },
  { component: ShuffleIcon, title: 'ShuffleIcon' },
];

export default {
  component: MenuIcon,
  title: 'MenuIcon',
  decorators: [withKnobs],
  argTypes: {
    stroke: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
    fill: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
  },
};

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => <div style={{ display: 'flex', flexWrap: 'wrap' }}>{ children }</div>;
// eslint-disable-next-line react/prop-types
const ElementWrapper = ({ children }) => <div style={{ padding: 8, textAlign: 'center' }}>{ children }</div>;
// eslint-disable-next-line react/prop-types
const Template = ({ stroke, fill }) => (
  <Container>
    { icons.map(({ component: Component, title }) => (
      <ElementWrapper key={title}>
        <Component stroke={colors[stroke]} fill={colors[fill]} />
        <p>{ title }</p>
      </ElementWrapper>
    )) }
  </Container>
);

export const Home = Template.bind({});
