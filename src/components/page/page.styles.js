import { makeStyles } from '@material-ui/core/styles';

export const usePageStyles = makeStyles(() => ({
  content: {
    minHeight: 'calc(100% - 64px)',
    paddingBottom: 88,
    paddingTop: '2em',
  },
}));
