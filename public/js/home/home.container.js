/**
 * Created by mlingolu on 4/25/17.
 */


import React from 'react';
import {Router} from 'react-router-dom';
import axios from 'axios';

import HomeComponent from './home.component';
import CreateCardModalContainer from './../widgets/modal/modal.container';

class HomeContainer extends React.Component{

    constructor(){
        super();

        this.state={
            cards:[]
        };
    }


    componentDidMount() {

        axios.get('/cards').then(response=>{

            this.setState({
                cards:response.data
            })
        });

    }

    openCreateForm(){

        console.log(4);
    }

    render(){
        return(
            <div>

                <button onClick={this.openCreateForm}> Create a Job Opening</button>

                <CreateCardModalContainer/>

                <HomeComponent cards={this.state.cards}/>
                <HomeComponent cards={this.state.cards}/>
                <HomeComponent cards={this.state.cards}/>
            </div>
        )
    }
}


export default HomeContainer;