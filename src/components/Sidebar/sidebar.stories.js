import React from 'react';

import Sidebar from 'components/Sidebar/Sidebar.container';
import {
  ProviderDecorator,
  RouterDecorator,
} from 'stories/decorators';

export default {
  component: Sidebar,
  title: 'Sidebar',
  decorators: [(Story) => (
    <div>
      <ProviderDecorator>
        <RouterDecorator><Story /></RouterDecorator>
      </ProviderDecorator>
    </div>
  )],
};

const Template = () => <Sidebar />;

export const Secondary = Template.bind({});
