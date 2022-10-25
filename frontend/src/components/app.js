//React Set up
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
//Load Components
import MainPageContainer from './main/main_container';
import HomePageContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
import UserShowContainer from './users/user_show_container'; 
import StateShowContainer from './states/state_show_container';
//MUI set up
import "./reset.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(13,14,70,255)',
      dark: 'rgba(80,52,255,255)',
    },
    secondary: {
      main: 'rgba(80,52,255,255)',

    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  button: {
    '&:hover': {
      backgroundColor: 'rgba(80,52,255,255)'
    }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <ModalContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPageContainer} />
        <ProtectedRoute exact path="/home" component={HomePageContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
        <ProtectedRoute exact path="/USAStates/:id" component={StateShowContainer} />
    </Switch>
  </ThemeProvider>
);

export default App;