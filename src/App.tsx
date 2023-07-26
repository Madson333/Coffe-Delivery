import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from "react-router-dom";
import { Router } from './Routers';
import { CartContextProvider } from './Contexts/CartContext';

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>

    </ThemeProvider>
  )
}


