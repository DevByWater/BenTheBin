import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// containers
import AppContainer from './../../ui/containers/AppContainer';
import MainContainer from './../../ui/containers/MainContainer';

// pages
import SignupPage from './../../ui/pages/SignupPage';
import LoginPage from './../../ui/pages/LoginPage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="login" component={LoginPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="/" component={AppContainer}>
    {/* index router is nested to make sure users are logged in before they can see the main page of our app */}
      <IndexRoute component={MainContainer} />
    </Route>
  </Router>
);
