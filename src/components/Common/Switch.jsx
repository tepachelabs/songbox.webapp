import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Switch } from '@material-ui/core';
import { green, blue } from '@material-ui/core/colors';
import propTypes from 'prop-types';

import { selectOS } from 'domains/core/app.selectors';

const android = makeStyles({
  switchBase: {
    color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  root: {},
  thumb: {},
  checked: {},
  track: {},
});

const iOS = makeStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}));

const base = makeStyles({
  switchBase: {
    color: blue[300],
    '&$checked': {
      color: blue[500],
    },
    '&$checked + $track': {
      backgroundColor: blue[500],
    },
  },
  root: {},
  thumb: {},
  checked: {},
  track: {},
});

const styles = {
  android,
  iOS,
  base,
};

const StyledSwitch = (props) => {
  const os = useSelector(selectOS);
  const style = styles[os];
  const {
    root,
    switchBase,
    thumb,
    track,
    checked,
    focusVisible,
  } = style();
  const {
    checked: isChecked,
    onChange,
  } = props;
  return (
    <Switch
      focusVisibleClassName={focusVisible}
      disableRipple
      classes={{
        root,
        switchBase,
        thumb,
        track,
        checked,
      }}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

StyledSwitch.propTypes = {
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
};

export default StyledSwitch;
