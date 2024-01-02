// EmployeeForm.js
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../redux/employeSlice";
const EmployeeForm = ({ isUpdated, setIsUpdated, selectedEmployee }) => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState(
    selectedEmployee || {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      contactMethods: [],
      maritalStatus: "",
      immediateJoiner: "",
    }
  );

  useEffect(() => {
    isUpdated && setEmployee(selectedEmployee);
    return () => {};
  }, [isUpdated]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedMethods = [...employee.contactMethods];
    if (checked && !updatedMethods.includes(name)) {
      updatedMethods.push(name);
    } else {
      updatedMethods = updatedMethods.filter((method) => method !== name);
    }
    setEmployee({ ...employee, contactMethods: updatedMethods });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.firstName || employee.phoneNumber) {
      isUpdated
        ? dispatch(updateEmployee(employee))
        : dispatch(addEmployee(employee));
      clearForm();
    } else {
      alert("Name and Mobile Field are Required");
    }
  };

  const clearForm = () => {
    setEmployee({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      contactMethods: [],
      maritalStatus: "",
      immediateJoiner: "",
    });
    isUpdated && setIsUpdated(false);
  };
  return (
    <div className="employeeForm">
      <form onSubmit={handleSubmit}>
        <h3 className="formTitle">Add Employee Form</h3>
        <div className="empName">
          <label>Employee Name:</label>
          <div className="empName">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={employee.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={employee.middleName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={employee.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="empName">
          <label>Gender:</label>
          <div className="ml-97">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={employee.gender === "male"}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={employee.gender === "female"}
                onChange={handleInputChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="others"
                checked={employee.gender === "others"}
                onChange={handleInputChange}
              />
              Others
            </label>
          </div>
        </div>
        <div className="ml-10">
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            className="w-6"
            placeholder="Mobile Number"
            value={employee.phoneNumber}
            onChange={handleInputChange}
            maxLength={13}
            minLength={10}
          />
        </div>
        <div className="empName">
          <label>Mode of Contact:</label>
          <div className="ml-92">
            <label>
              <input
                type="checkbox"
                name="email"
                checked={employee.contactMethods.includes("email")}
                onChange={handleCheckboxChange}
              />
              Email
            </label>
            <label>
              <input
                type="checkbox"
                name="phone"
                checked={employee.contactMethods.includes("phone")}
                onChange={handleCheckboxChange}
              />
              Phone
            </label>
          </div>
        </div>
        <div>
          <div className="empName">
            <label>Marital Status:</label>
            <div className="custom-select">
              <select
                name="maritalStatus"
                value={employee.maritalStatus}
                onChange={handleInputChange}
              >
                <option value="">Select Marital Status</option>
                <option value="married">Married</option>
                <option value="single">Single</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
        </div>
        <div className="empName">
          <label>Is immediate Joiner:</label>
          <div className="ml-17">
            <label>
              <input
                type="radio"
                name="immediateJoiner"
                value="yes"
                checked={employee.immediateJoiner === "yes"}
                onChange={handleInputChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="immediateJoiner"
                value="no"
                checked={employee.immediateJoiner === "no"}
                onChange={handleInputChange}
              />
              No
            </label>
          </div>
        </div>
        <div className="btnGrp">
          <button type="submit">{isUpdated ? "Update" : "Submit"}</button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
