import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import GlobalProvider from './Provider/GlobalProvider'
import theme from './App.GlobalStyle'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CssBaseline >
    <BrowserRouter>
      <ThemeProvider theme = {theme}>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </CssBaseline>
);
