import { makeStyles } from '@material-ui/core/styles';

export const useFileTitleStyles = makeStyles(() => ({
  root: (props) => ({
    textDecoration: props.isStrikethrough ? 'line-through' : '',
  }),
}));
