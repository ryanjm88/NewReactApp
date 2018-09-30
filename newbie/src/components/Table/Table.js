import React, {Component} from "react";
import "./Table.css";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

class Table extends Component   {
    render()    {
        const { employeeData, removeEmployee } = this.props;

        return  (
            <table>
                <TableHeader />
                <TableBody 
                    employeeData={employeeData} 
                    removeEmployee={removeEmployee}
                />
            </table>
        );
    }
}

export default Table;