import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

import {
  UserProfileEmail,
  UserProfileName,
  UserProfileWrapper,
  useStyles,
} from './user-profile.style';

export const UserProfileComponent = ({ email, name, photo }) => {
  const classes = useStyles();

  return (
    <UserProfileWrapper>
      <Avatar className={classes.brand} alt="your avatar" src={photo} />
      <UserProfileEmail>{email}</UserProfileEmail>
      <UserProfileName>{name}</UserProfileName>
    </UserProfileWrapper>
  );
};

UserProfileComponent.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
