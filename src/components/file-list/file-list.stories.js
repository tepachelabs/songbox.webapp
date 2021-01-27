import React from 'react';
import { HeartIcon, MoreIcon } from 'components/icon';
import { FileListComponent } from './file-list.component';

export default {
  component: FileListComponent,
  title: 'FileList',
  argTypes: {
    dense: { control: 'boolean' },
  },
};

const actions = [
  { icon: <HeartIcon />, alt: 'add to favs', onClick: () => console.log('clicked') },
  { icon: <MoreIcon />, alt: 'toggle menu', onClick: () => console.log('clicked') },
];

const filesMock = [
  { type: 'folder', title: 'First folder' },
  { type: 'folder', title: 'Second folder' },
  { type: 'folder', title: 'Really long folder name: Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { type: 'file', title: 'One', actions },
  { type: 'file', title: 'Really long file name: Lorem ipsum dolor sit amet, consectetur adipiscing elit.', actions },
  { type: 'file', title: 'The last one', actions },
];

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div style={{ padding: 8, background: 'white' }}>
    { children }
  </div>
);
// eslint-disable-next-line react/prop-types
const Template = ({ dense, files }) => (
  <Wrapper>
    <FileListComponent
      dense={dense}
      files={files}
    />
  </Wrapper>
);

export const Home = Template.bind({});

Home.args = {
  dense: false,
  files: [...filesMock],
};
