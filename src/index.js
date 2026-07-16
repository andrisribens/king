import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './components/App';

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    primary: {
      main: '#f5ba13',
      dark: '#c4920a',
      contrastText: '#1a1a1a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          borderWidth: 2,
          borderColor: '#c4920a',
          color: '#5c3d00',
          '&:hover': {
            borderWidth: 2,
            borderColor: '#8a6a08',
            backgroundColor: 'rgba(245, 186, 19, 0.12)',
          },
        },
        containedPrimary: {
          fontWeight: 600,
          boxShadow: '0 2px 6px rgba(120, 70, 0, 0.25)',
          '&:hover': {
            backgroundColor: '#e0a800',
            boxShadow: '0 3px 8px rgba(120, 70, 0, 0.3)',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
