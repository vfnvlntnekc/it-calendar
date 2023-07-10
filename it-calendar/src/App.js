import { ThemeProvider, createTheme } from "@material-ui/core";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#71B8DF",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
