import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/Menu" component={ Menu } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
