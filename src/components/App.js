import React from 'react';
import Header from './UI/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './UI/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hello
    </ThemeProvider>
  );
}

export default App;
