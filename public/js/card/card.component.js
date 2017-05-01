/**
 * Created by mlingolu on 4/26/17.
 */

import React from 'react';

const CardComponent = (props)=>(

    <div className="card m-3 "  data-editable data-name="main-content">
        <img className="card-img-top" src={props.card.url}
             alt="Card image cap" style={{height: '180px', width: '100%', display: 'block'}}/>
        <div className="card-block">
            <h4 className="card-title">{props.card.title}</h4>
            <p className="card-text">{props.card.description}</p>


        </div>
        <div className="card-footer">
            <small className="text-muted">{props.card.createdDate}</small>
        </div>
    </div>
)

export default CardComponent;