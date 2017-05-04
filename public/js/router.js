/**
 * Created by mlingolu on 5/3/17.
 */

import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderContainer from './header/header.container';
import HomeContainer from './home/home.container';
import CardDetailsContainer from './card/card-details/card-details.container';

const RouterComponent = ()=>(
    <Router>
        <div>

            <HeaderContainer/>
            <div className="container">
                <Route exact path={`/`} component={HomeContainer}/>
                <Route path={`/:jobId`} component={CardDetailsContainer}/>
            </div>
        </div>
    </Router>
)

export default RouterComponent;