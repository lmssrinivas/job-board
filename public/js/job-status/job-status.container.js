/**
 * Created by lmssrinivas on 5/11/17.
 */

import React from 'react';

import JobStatusComponent from './job-status.component';


class JobStatusContainer extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <JobStatusComponent></JobStatusComponent>
            </div>
        )
    }

}

export default JobStatusContainer;