/**
 * Created by lmssrinivas on 5/11/17.
 */


import React from 'react';
import TextField from 'material-ui/TextField';

const ApplyJobComponent =(props)=>(

    <div className="container">
        <div className="form-group row">
            <div className="col-sm-12">
                <TextField
                    hintText="Full Name"
                    floatingLabelText="Full Name"
                    style = {{width: '80%'}}
                />

                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    style = {{width: '80%'}}
                />

                <TextField
                    hintText="Full Name"
                    floatingLabelText="Full Name"
                    style = {{width: '80%'}}
                />

                <TextField
                    hintText="Full Name"
                    floatingLabelText="Full Name"
                    style = {{width: '80%'}}
                />
            </div>
        </div>


    </div>
)

export default ApplyJobComponent;