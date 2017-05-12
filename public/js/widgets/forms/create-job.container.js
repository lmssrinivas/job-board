/**
 * Created by lmssrinivas on 5/11/17.
 */

import React from 'react';
import CreateJobComponent  from './create-job.component'


class CreateJobContainer extends React.Component{

    constructor(props) {
        super(props);

        this.state = {};
        this.styles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
            },
        };
    }

    deleteChip(key) {

        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({chipData: this.chipData});
    };

    addChip(data){

        this.props.jobModel.tags.push(data);
    }

    render() {
        return (

            <CreateJobComponent
                jobModel={this.props.jobModel}
                deleteChip={this.deleteChip.bind(this)}
                styles={this.styles}
            >

            </CreateJobComponent>
        );
    }

}


export default CreateJobContainer;