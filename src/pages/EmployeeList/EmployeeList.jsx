import Table from '../../components/Table/Table'
import { Link } from 'react-router-dom'

function EmployeeList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table id="employee-table" className="display" />
            <Link to="/">
                Home
            </Link>
        </div>
    );
}
export default EmployeeList;
