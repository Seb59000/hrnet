import { useStore, useSelector } from "react-redux";
import { states } from '../../data/states.js';
import { departments } from '../../data/departments.js';
import React, { useState } from "react";
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import NpmDatePicker from '../../components/DatePicker/DatePicker.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import { Link } from 'react-router-dom'
// import { saveEmployee } from '../../services/EmployeeModel.js'

import "react-datepicker/dist/react-datepicker.css";

function CreateEmployee() {
    const store = useStore();
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [zipCode, setZipCode] = useState();

    const onlyStates = states.map((state) => state.name)
    const abbreviations = states.map((state) => state.abbreviation)

    const handleSubmit = () => {
        const department = document.getElementById('department');
        const state = document.getElementById('state');

        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: birthDate.toLocaleDateString(),
            startDate: startDate.toLocaleDateString(),
            department: department.value,
            street: street,
            city: city,
            state: state.value,
            zipCode: zipCode
        }
        store.dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });
        console.log(store.getState().listOfEmployees);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <div onClick={closeModal}>
                    <Modal text={"Employee Created!"} />
                </div>
            )}

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
                    <input type="text" id="first-name" onChange={(event) => { setFirstName(event.target.value) }} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" onChange={(event) => { setLastName(event.target.value) }} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <NpmDatePicker selected={birthDate} onChange={(date) => { setBirthDate(date) }} />

                    <label htmlFor="start-date">Start Date</label>
                    <NpmDatePicker selected={startDate} onChange={(date) => { setStartDate(date) }} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" onChange={(event) => { setStreet(event.target.value) }} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" onChange={(event) => { setCity(event.target.value) }} />

                        <label htmlFor="state">State</label>
                        <Dropdown id="state" choices={onlyStates} values={abbreviations} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" onChange={(event) => { setZipCode(event.target.value) }} />
                    </fieldset>
                    <label htmlFor="department">Department</label>
                    <Dropdown id="department" choices={departments} values={departments} />
                </form>
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}

export default CreateEmployee;
