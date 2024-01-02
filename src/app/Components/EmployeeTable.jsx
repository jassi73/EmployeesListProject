import { useDispatch, useSelector } from "react-redux";
import { removeEmployee } from "../redux/employeSlice";
const EmployeeTable = ({ setIsUpdated, setSelectedEmployee }) => {
  const { employees } = useSelector((state) => state);
  const dispatch = useDispatch();

  const editEmployee = (selectedEmployee) => {
    setIsUpdated(true);
    setSelectedEmployee(selectedEmployee);
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>First Name</th>
        <th>Middle Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Phone Number</th>
        <th>Mode of Contact</th>
        <th>Marital Status</th>
        <th>Immediate Joiner</th>
        <th>Actions</th>
      </tr>
    );
  };

  const renderTableData = () => {
    return employees.map((employee, index) => (
      <tr key={index}>
        <td>{employee.firstName}</td>
        <td>{employee.middleName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.gender}</td>
        <td>{employee.phoneNumber}</td>
        <td>{employee.contactMethods.join(", ")}</td>
        <td>{employee.maritalStatus}</td>
        <td>{employee.immediateJoiner}</td>
        <td className="">
          <button onClick={() => editEmployee(employee)}>Edit</button>
          <button onClick={() => dispatch(removeEmployee(employee.id))}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="empTable">
      <h2 className="alignCenter">Employees List</h2>
      {employees && employees.length > 0 ? (
        <table>
          <thead>{renderTableHeader()}</thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      ) : (
        <h4 className="alignCenter">Add The Employee</h4>
      )}
    </div>
  );
};

export default EmployeeTable;
