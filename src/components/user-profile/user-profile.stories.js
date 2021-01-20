import React from 'react';
import { UserProfileComponent } from './user-profile.component';

export default {
  component: UserProfileComponent,
  title: 'UserProfileComponent',
  argTypes: {
    email: { control: 'text' },
    name: { control: 'text' },
    photo: { control: 'text' },
  },
};

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ padding: 64, background: 'white', display: 'inline-block' }}>
    { children }
  </div>
);
// eslint-disable-next-line react/prop-types
const Template = ({ email, photo, name }) => (
  <Wrapper>
    <UserProfileComponent email={email} name={name} photo={photo} />
  </Wrapper>
);

export const Home = Template.bind({});

Home.args = {
  email: 'jenner@example.com',
  name: 'Jenner Smith',
  photo: 'https://avatarfiles.alphacoders.com/557/55775.jpg',
};
