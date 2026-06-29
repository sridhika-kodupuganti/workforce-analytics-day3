import "./EmployeeTable.css";

const EmployeeTable = ({ employees }) => {
  return (
    <div className="employee-table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Location</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Skills</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
                <td>
                  <span
                    className={
                      employee.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {employee.status}
                  </span>
                </td>
                <td>{employee.experience} Years</td>
                <td>{employee.skills.join(", ")}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-data">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;