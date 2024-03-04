import { Grid } from "gridjs-react";
import { RetrieveEmployees } from '../../services/EmployeeModel'
import React, { useState } from "react";
import './Table.css'

function Table() {
    const [selectValue, setSelectValue] = useState(10);

    const handleChange = (e) => {
        setSelectValue(e.target.value);
    };

    const datas = RetrieveEmployees();

    return (
        <div>
            <p>Show <select value={selectValue} onChange={handleChange}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select> entries</p>
            <Grid
                data={datas}
                columns={
                    [{
                        name: "First Name",
                        data: (row) => row.firstName,
                    }, {
                        name: "Last Name",
                        data: (row) => row.lastName,
                    }, {
                        name: "Start Date",
                        data: (row) => row.startDate,
                    }, {
                        name: "Departement",
                        data: (row) => row.department,
                    }, {
                        name: "Date Of Birth",
                        data: (row) => row.dateOfBirth,
                    }, {
                        name: "Street",
                        data: (row) => row.street,
                    }, {
                        name: "City",
                        data: (row) => row.city,
                    }, {
                        name: "State",
                        data: (row) => row.state,
                    }, {
                        name: "Zip Code",
                        data: (row) => row.zipCode,
                    }
                    ]
                }
                search={true}
                sort={true}
                pagination={{
                    enabled: true,
                    limit: selectValue,
                }}
            />
        </div>
    );
}

export default Table;
