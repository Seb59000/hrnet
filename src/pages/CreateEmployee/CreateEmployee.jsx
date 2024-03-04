import { states } from '../../data/states.js';
import { departments } from '../../data/departments.js';
import React, { useState } from "react";
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import NpmDatePicker from '../../components/DatePicker/DatePicker.jsx'
import { Link } from 'react-router-dom'
import { saveEmployee } from '../../services/EmployeeModel.js'

import "react-datepicker/dist/react-datepicker.css";

function CreateEmployee() {
    const [birthDate, setBirthDate] = useState();
    const [startDate, setStartDate] = useState();

    const onlyStates = states.map((state) => state.name)
    const abbreviations = states.map((state) => state.abbreviation)

    const handleSubmit = () => {
        saveEmployee(birthDate, startDate)
    }

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/list">
                    View Current Employees
                </Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <NpmDatePicker selected={birthDate} onChange={(date) => { setBirthDate(date) }} />

                    <label htmlFor="start-date">Start Date</label>
                    <NpmDatePicker selected={startDate} onChange={(date) => { setStartDate(date) }} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <Dropdown id="state" choices={onlyStates} values={abbreviations} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>
                    <label htmlFor="department">Department</label>
                    <Dropdown id="department" choices={departments} values={departments} />
                </form>
                <button onClick={handleSubmit}>Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    );
}

export default CreateEmployee;
