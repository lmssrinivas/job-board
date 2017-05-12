import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import RouterComponent from './router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./../styles/main.scss');


class AppContainer extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <MuiThemeProvider>
                <RouterComponent/>
            </MuiThemeProvider>
        )
    }
}

injectTapEventPlugin();

ReactDOM.render(<AppContainer/>, document.getElementById('app'));
