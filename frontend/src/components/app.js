import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPageContainer from './main/main_container';
import HomePageContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
import UserShowContainer from './users/user_show_container'; 
import StateShowContainer from './states/state_show_container';

const App = () => (
  <div>
    <ModalContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPageContainer} />
        <ProtectedRoute exact path="/home" component={HomePageContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
        <ProtectedRoute exact path="/USAStates/:id" component={StateShowContainer} />
    </Switch>
  </div>
);

export default App;