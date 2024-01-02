import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";
export const EmployeesList = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <EmployeeForm
        isUpdated={isUpdated}
        selectedEmployee={selectedEmployee}
        setIsUpdated={setIsUpdated}
      />

      <EmployeeTable
        setIsUpdated={setIsUpdated}
        setSelectedEmployee={setSelectedEmployee}
      />
    </div>
  );
};
export default EmployeesList;
