import React from 'react';
import { useSelector } from 'react-redux';
import { UserProfileComponent } from './user-profile.component';

export const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <UserProfileComponent
      avatar={user.get('avatar')}
      email={user.get('email')}
      name={user.get('name')}
    />
  );
};
