/**
 * Created by mlingolu on 4/25/17.
 */


import React from 'react';
import {Router} from 'react-router-dom';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import HomeComponent from './home.component';
import CreateJobContainer from './../widgets/forms/create-job.container';

class HomeContainer extends React.Component{

    constructor(){
        super();

        this.state={
            cards:[],
            open: false,
            jobModel:{
                title:'',
                description:'',
                tags:[],
                salary:''
            }
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
        this.setState({
            open: true
        });
    }

    closeCreateForm(){
        this.setState({open: false});
    }

    createJob(){
        let data={};
        axios.post('/job/create',data).then(response=>{
            console.log(response);
        })
    }

    render(){

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.closeCreateForm.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.createJob.bind(this)}
            />,
        ];


        return(
            <div>

                <div className="row mt-4 ">
                    <div className="col-sm-12">
                        <RaisedButton primary={true} className="pull-right" label="Create a Job Opening" onTouchTap={this.openCreateForm.bind(this)} />
                        <Dialog
                            title="Create a Job Opening"
                            modal={false}
                            actions={actions}
                            open={this.state.open}
                            onRequestClose={this.closeCreateForm.bind(this)}
                            autoScrollBodyContent={true}
                            contentStyle={{width: '100%', transform: 'translate(0, 0)'}}
                            bodyStyle={{padding: 0}}
                            style={{paddingTop: 0, height: '100vh'}}
                        >
                            <CreateJobContainer jobModel={this.state.jobModel}>

                            </CreateJobContainer>

                        </Dialog>
                    </div>

                </div>
                {/*<CreateCardModalContainer/>*/}

                <HomeComponent cards={this.state.cards}/>
                <HomeComponent cards={this.state.cards}/>
                <HomeComponent cards={this.state.cards}/>
            </div>
        )
    }
}


export default HomeContainer;