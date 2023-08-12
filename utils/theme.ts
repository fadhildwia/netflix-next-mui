import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const base = createTheme({
  palette: {
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: red[400],
    },
  },
});

const theme = responsiveFontSizes(base)

export default theme