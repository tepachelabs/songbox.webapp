import React from 'react';
import { useSelector } from 'react-redux';
import { UserProfileComponent } from './user-profile.component';

export const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <UserProfileComponent
      email={user.get('email')}
      name={user.getIn(['name', 'display_name'])}
      photo={user.get('photo')}
    />
  );
};
