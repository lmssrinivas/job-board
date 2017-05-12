/**
 * Created by mlingolu on 5/11/17.
 */

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const JobStatusComponent = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Company</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn>Last Modified</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableRowColumn>Front End Developer</TableRowColumn>
                <TableRowColumn>EBay</TableRowColumn>
                <TableRowColumn>Applied</TableRowColumn>
                <TableRowColumn>John doe</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>Web Developer</TableRowColumn>
                <TableRowColumn>Paypal</TableRowColumn>
                <TableRowColumn>Review</TableRowColumn>
                <TableRowColumn>Konisky</TableRowColumn>
            </TableRow>

            <TableRow>
                <TableRowColumn>Full stacjk developer</TableRowColumn>
                <TableRowColumn>Home Depot</TableRowColumn>
                <TableRowColumn>Offer Received</TableRowColumn>
                <TableRowColumn>HR</TableRowColumn>
            </TableRow>


            <TableRow>
                <TableRowColumn>JS Developer</TableRowColumn>
                <TableRowColumn>Kensignton Firm</TableRowColumn>
                <TableRowColumn>1st Interview- completed</TableRowColumn>
                <TableRowColumn>Ganesh Raman</TableRowColumn>
            </TableRow>

        </TableBody>
    </Table>
);

export default JobStatusComponent;