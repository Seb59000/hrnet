import { Link } from 'react-router-dom'
import TableReact from '../../components/TableReact/TableReact.jsx'

function EmployeeList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <TableReact />
            <Link to="/">
                Home
            </Link>
        </div>
    );
}
export default EmployeeList;
