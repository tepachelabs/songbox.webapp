import React from 'react';
import { UserProfileComponent } from './user-profile.component';

export default {
  component: UserProfileComponent,
  title: 'UserProfileComponent',
  argTypes: {
    avatar: { control: 'text' },
    email: { control: 'text' },
    name: { control: 'text' },
  },
};

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ padding: 64, background: 'white', display: 'inline-block' }}>
    {children}
  </div>
);
// eslint-disable-next-line react/prop-types
const Template = ({ avatar, email, name }) => (
  <Wrapper>
    <UserProfileComponent avatar={avatar} email={email} name={name} />
  </Wrapper>
);

export const Home = Template.bind({});

Home.args = {
  avatar: 'https://avatarfiles.alphacoders.com/557/55775.jpg',
  email: 'jenner@example.com',
  name: 'Jenner Smith',
};
