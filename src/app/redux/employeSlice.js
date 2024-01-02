import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const employeesListSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const addEmployee = {
        id: nanoid(),
        ...action.payload,
      };
      state.employees.push(addEmployee);
    },
    updateEmployee: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const updatedEmployees = state.employees.map((emp) =>
        emp.id === id ? { ...emp, ...updatedData } : emp
      );
      state.employees = updatedEmployees;
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const { addEmployee, updateEmployee, removeEmployee } =
  employeesListSlice.actions;

export default employeesListSlice.reducer;
