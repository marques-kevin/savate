import { createMuiTheme } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: yellow
  },
  typography: {
    fontFamily: "Open Sans, sans-serif"
  }
});

export default theme;
