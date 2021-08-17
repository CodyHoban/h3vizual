import React from 'react'
import { ThemeProvider, withTheme } from '@material-ui/core/styles'

import theme from './ui/Theme'
import Header from './ui/Header'

function App() {
  console.log('Here', theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
        <Header /> 
        Hello!
      </ThemeProvider>
    </div>
  );
}

export default withTheme(App);