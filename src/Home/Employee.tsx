import React from "react";

export const Employee = () => {
  interface IEmployee {
    id: number;
    name: string;
    salary: number;
  }
  const employee: IEmployee = {
    id: 1,
    name: "jalander Katipelly",
    salary: 50000,
  };
  return (
    <div>
      <table>
        <th>
          <span>Id</span>
        </th>
        <th>
          <span>Name</span>
        </th>
        <th>
          <span>Salary</span>
        </th>
        <tr>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.salary}</td>
        </tr>
      </table>
    </div>
  );
};
