import { makeStyles } from '@material-ui/core/styles';

export const usePageStyles = makeStyles(({ palette }) => ({
  content: {
    backgroundColor: palette.background.default,
    minHeight: 'calc(100% - 120px)',
    paddingBottom: 121,
    paddingTop: '2em',
  },
}));
