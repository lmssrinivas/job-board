/**
 * Created by mlingolu on 5/3/17.
 */

import React from 'react';
import axios from 'axios';

class CardDetailsContainer extends React.Component{

    constructor(match){
        super(match);

        console.log(match);
        this.state={
            cardDetails :{}
        };
    }


    componentDidMount(match) {

        axios.get('/cards').then(response=>{

            let cardDetails;
            response.data.map(val=>{

                if(val.id == this.props.match.params.jobId){
                    cardDetails = val;
                }
            })
            this.setState({
                cardDetails:cardDetails
            })
        });

    }


    render(){

        return(
            <div className="card m-3 ">
                <img className="card-img-top" src={this.state.cardDetails.url}
                     alt="Card image cap" style={{height: '180px', width: '100%', display: 'block'}}/>
                <div className="card-block">
                    <h4 className="card-title">{this.state.cardDetails.title}</h4>
                    <p className="card-text">{this.state.cardDetails.description}</p>


                </div>
                <div className="card-footer">
                    <small className="text-muted">{this.state.cardDetails.createdDate}</small>
                </div>
            </div>

        )
    }
}

export default CardDetailsContainer;