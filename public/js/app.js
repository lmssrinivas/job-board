

import React from 'react';
import ReactDOM from 'react-dom'
import HomeContainer from './home/home.container';
import HeaderContainer from './header/header.container';

class AppContainer extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>

                <HeaderContainer/>
                <div className="container">
                    <HomeContainer/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<AppContainer/>, document.getElementById('app'));
