/**
 * Created by lmssrinivas on 5/11/17.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';


const CreateJobComponent =({jobModel,deleteChip,styles,chipData})=>(


    <div className="container">
        <div className="form-group row">
            <div className="col-sm-10 mx-auto">
                <TextField
                    hintText="Title"
                    floatingLabelText="Job Title"
                    fullWidth={true}
                    name="title"
                    value={jobModel.title}
                />

                <TextField
                    hintText="Description"
                    floatingLabelText="Description"
                    multiLine={true}
                    fullWidth={true}
                    name="description"
                    value={jobModel.description}
                    rows={7}
                />


                <div style={styles.wrapper}>
                    <TextField
                        hintText="Tags"
                        floatingLabelText="Tags"
                        fullWidth={true}
                        name="tags"
                        value={jobModel.tags}
                    />
                    {chipData.map(data=>
                        <Chip
                            key={data.key}
                            onRequestDelete={() => deleteChip(data.key)}
                            style={styles.chip}
                        >
                            {data.label}
                        </Chip>
                    )}
                </div>

                <TextField
                    hintText="Salary"
                    floatingLabelText="Salary"
                    fullWidth={true}
                />
            </div>
        </div>


    </div>
)

export default CreateJobComponent;