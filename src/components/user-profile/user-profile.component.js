import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

import {
  UserProfileEmail,
  UserProfileName,
  UserProfileWrapper,
  useStyles,
} from './user-profile.style';

export const UserProfileComponent = ({ avatar, email, name }) => {
  const classes = useStyles();

  return (
    <UserProfileWrapper>
      <Avatar className={classes.brand} alt="your avatar" src={avatar} />
      <UserProfileEmail>{email}</UserProfileEmail>
      <UserProfileName>{name}</UserProfileName>
    </UserProfileWrapper>
  );
};

UserProfileComponent.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
