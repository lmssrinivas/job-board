/**
 * Created by lmssrinivas on 4/25/17.
 */

import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

class HeaderContainer extends React.Component{


    constructor(){
        super()
    }

    render(){
        return(
            <div>

                <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to={'/'} className="navbar-brand">
                        <img width="50" height="50" src="images/favicons/ms-icon-310x310.png" alt=""/>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>

                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>


        )
    }
}


export default HeaderContainer;