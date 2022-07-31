import React from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './Popup';
import { ThemeProvider } from '@emotion/react';

const theme = {
  typography: {
    h1: {
      fontSize: '3rem',
      lineHeight: 1.333,
      fontWeight: 500,
      letterSpacing: '-0.02083em',
    },
    h2: {
      fontSize: '2.125rem',
      lineHeight: 1.353,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.333,
      fontWeight: 500,
      letterSpacing: '0.02083em',
    },
  },
  palette: {
    text: {
      primary: 'blue',
      secondary: 'purple',
    },
    background: {
      primary: 'papayawhip',
    },
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Popup />
  </ThemeProvider>,
  document.getElementById('root')
);
