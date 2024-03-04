export function saveEmployee(birthDate, startDate) {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');

    if (birthDate !== undefined) {
        birthDate = birthDate.toLocaleDateString()
    }

    if (startDate !== undefined) {
        startDate = startDate.toLocaleDateString()
    }

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: birthDate,
        startDate: startDate,
        department: department.value,
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value
    };

    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
}

export function RetrieveEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees'));
    return employees;
}
