import { makeStyles } from '@material-ui/core/styles';

export const useFileTitleStyles = makeStyles(() => ({
  root: ({ isStrikethrough }) => ({
    textDecoration: isStrikethrough ? 'line-through' : '',
  }),
}));
