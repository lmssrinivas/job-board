/**
 * Created by lmssrinivas on 5/3/17.
 */

import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import HeaderContainer from './header/header.container';
import HomeContainer from './home/home.container';
import JobStatusContainer from './job-status/job-status.container';
import CardDetailsContainer from './card/card-details/card-details.container';

const RouterComponent = ()=>(
    <Router>

        <div>

            <HeaderContainer/>
            <div className="container">
                <Route exact path={`/`} component={HomeContainer}/>
                <Switch>
                    <Route  exact={true} path={`/status`} component={JobStatusContainer}/>
                    <Route path={`/:jobId`} component={CardDetailsContainer}/>
                </Switch>
            </div>
        </div>
    </Router>
)

export default RouterComponent;