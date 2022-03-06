
const employee = {
    name: 'Michelle', street: 'Uche Street'}
    
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
     newEmployee[key] = value;
     return newEmployee;
    }
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}