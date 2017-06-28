import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

//containers
import AppContainer from '../../ui/containers/AppContainer'
import MainContainer from '../../ui/containers/MainContainer'

//pages
import SignupPage from '../../ui/pages/auth/SignupPage'
import LoginPage from '../../ui/pages/auth/LoginPage'
import HomePage from '../../ui/pages/home/HomePage'
import Dashboard from '../../ui/pages/dash/Dashboard'
import Workplace from '../../ui/pages/dash/Workplace'

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="login" component={LoginPage} />
        <Route path="signup" component={SignupPage} />
        <Route path='bins' component={AppContainer}>
            <IndexRoute component={MainContainer} />
            <Route path='dashboard' component={Dashboard} />
            <Route path='workplace' component={Workplace} /> 
        </Route>
    </Router>
)