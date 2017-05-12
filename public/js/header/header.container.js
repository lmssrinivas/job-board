/**
 * Created by lmssrinivas on 4/25/17.
 */

import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';

class HeaderContainer extends React.Component{


    constructor(){
        super();
        this.state={
            searchData :[]
        }
    }

    searchRecords(value){
        this.setState({
            searchData: [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render(){
        return(
            <div>

                <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to={'/'} className="navbar-brand">
                        <img style={{borderRadius:24}} width="50" height="50" src="images/favicons/ms-icon-310x310.png" alt=""/>
                    </Link>

                    <form className="form-inline">
                        <AutoComplete
                            hintText="Type anything"
                            dataSource={this.state.searchData}
                            onUpdateInput={this.searchRecords.bind(this)}
                        />

                        <IconButton iconClassName="muidocs-icon-custom-github" />
                    </form>


                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to={'/status'} className="nav-link">
                                Status
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>


        )
    }
}


export default HeaderContainer;