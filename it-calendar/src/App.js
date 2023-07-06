
import { ThemeProvider, createTheme } from '@material-ui/core';
import './App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#71B8DF',
    },
  }    
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
