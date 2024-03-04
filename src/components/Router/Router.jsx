import React from 'react';
import CreateEmployee from '../../pages/CreateEmployee/CreateEmployee';
import EmployeeList from '../../pages/EmployeeList/EmployeeList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/list" element={<EmployeeList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;