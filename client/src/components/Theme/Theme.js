import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';

const Theme = ({ children, custom }) => {
  const {
    theme: { color, shade },
  } = custom;

  let setTheme = Colors.blue[500];

  if (Colors[color] && Colors[color][shade]) {
    setTheme = Colors[color][shade];
  }

  const theme = createMuiTheme({
    palette: {
      primary: { main: setTheme },
      secondary: { main: '#FFFFFF' },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default Theme;
