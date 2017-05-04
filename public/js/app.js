import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import RouterComponent from './router';

class AppContainer extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <RouterComponent/>
        )
    }
}


ReactDOM.render(<AppContainer/>, document.getElementById('app'));
