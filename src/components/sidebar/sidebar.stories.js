import React from 'react';

import { RouterDecorator } from 'stories/decorators';
import { Sidebar } from './sidebar.component';

export default {
  component: Sidebar,
  title: 'Sidebar',
  decorators: [(Story) => (<RouterDecorator><Story /></RouterDecorator>)],
};

const Template = () => (<Sidebar><span /></Sidebar>);

export const Home = Template.bind({});
