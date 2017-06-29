import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

//containers
import AppContainer from '../../ui/containers/AppContainer'
import MainContainer from '../../ui/containers/MainContainer'
import WorkplaceContainer from '../../ui/containers/WorkplaceContainer'

//pages
import AuthPage from '../../ui/pages/auth/AuthPage'
import HomePage from '../../ui/pages/home/HomePage'



export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="auth/:action" component={AuthPage} />
        <Route path="in" component={AppContainer}>
            <Route path="dash" component={MainContainer} />
                <Route path="/workplace/:binName" component={WorkplaceContainer} />
            <Route />    
        </Route>
    </Router>
)