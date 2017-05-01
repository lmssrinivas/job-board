/**
 * Created by mlingolu on 4/25/17.
 */

import React from 'react';
import CardComponent from './../card/card.component';


const HomeComponent = (props) => (


    <div>

        <div className="card-deck row">

            { props.cards.map((card,index)=> (

                <CardComponent key={index} card={card}/>
            ))}
        </div>
    </div>


)


export default HomeComponent;